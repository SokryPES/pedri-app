pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'sokrypes/pedri-app'
        DOCKER_CREDENTIALS_ID = 'dockerhub-credentials-id'
        GITHUB_CREDENTIALS_ID = 'github-credentials'
        MANIFEST_REPO = 'github.com/SokryPES/pedri-manifests.git'
    }

    stages {
        stage('Checkout Source Code') {
            steps {
                checkout scm
            }
        }

        stage('Build & Push Docker Image') {
            steps {
                script {
                    // Build image 
                    sh 'docker build -t $DOCKER_IMAGE:${BUILD_NUMBER} .'
                    sh 'docker tag $DOCKER_IMAGE:${BUILD_NUMBER} $DOCKER_IMAGE:latest'
                    
                    
                    withCredentials([usernamePassword(credentialsId: "${DOCKER_CREDENTIALS_ID}", passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USER')]) {
                        sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USER --password-stdin'
                        sh 'docker push $DOCKER_IMAGE:${BUILD_NUMBER}'
                        sh 'docker push $DOCKER_IMAGE:latest'
                    }
                }
            }
        }

        stage('Update Helm values.yaml in GitOps Repo') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: "${GITHUB_CREDENTIALS_ID}", passwordVariable: 'GITHUB_TOKEN', usernameVariable: 'GITHUB_USER')]) {
                        sh '''
                            git config --global user.email "jenkins@ci-cd.local"
                            git config --global user.name "Jenkins CI"
                            
                            
                            rm -rf manifest-repo
                            
                            # Clone Helm 
                            git clone https://${GITHUB_USER}:${GITHUB_TOKEN}@${MANIFEST_REPO} manifest-repo
                            cd manifest-repo
                            
                            # Update tag 
                            sed -i 's/tag: .*/tag: "'${BUILD_NUMBER}'"/' values.yaml
                            
                            # Commit and Push 
                            git add values.yaml
                            git commit -m "chore(gitops): update image tag to ${BUILD_NUMBER} [skip ci]"
                            git push origin main
                        '''
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                sh 'docker logout || true'
                sh 'docker image prune -f || true'
            }
        }
    }
}
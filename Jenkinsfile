pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials-id')
        GITHUB_TOKEN          = credentials('github-pat')
        IMAGE_NAME            = 'sokrypes/pedri-app'
        MANIFEST_REPO         = 'SokryPES/pedri-manifests'
    }

    stages {
        stage('1. Build Docker Image') {
            steps {
                sh """
                    docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} .
                    docker tag ${IMAGE_NAME}:${BUILD_NUMBER} ${IMAGE_NAME}:latest
                """
            }
        }

        stage('2. Push Image to Docker Hub') {
            steps {
                sh """
                    echo \$DOCKERHUB_CREDENTIALS_PSW | docker login -u \$DOCKERHUB_CREDENTIALS_USR --password-stdin
                    docker push ${IMAGE_NAME}:${BUILD_NUMBER}
                    docker push ${IMAGE_NAME}:latest
                """
            }
        }

        stage('3. Update Manifest Repo') {
            steps {
                sh """
                    git config --global user.email "jenkins@ci.com"
                    git config --global user.name "Jenkins"

                    rm -rf temp_repo
                    git clone https://${GITHUB_TOKEN}@github.com/${MANIFEST_REPO}.git temp_repo
                    cd temp_repo

                    # កែប្រែ Tag រូបភាពក្នុង values.yaml នៅ Root Folder
                    sed -i "s|tag: .*|tag: \\"${BUILD_NUMBER}\\"|g" values.yaml

                    git add values.yaml
                    git commit -m "chore: update image tag to ${BUILD_NUMBER}" || echo "No changes to commit"
                    git push origin main
                """
            }
        }
    }

    post {
        always {
            sh 'docker logout || true'
            cleanWs()
        }
    }
}
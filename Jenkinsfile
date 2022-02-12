pipeline {
    agent any
    environment {
        SSH_KEY = credentials('ssh_path')
    }
    stages {
        stage('docker compose build') {
            steps {
                bat 'docker compose build'
            }
        }        
        
        stage('docker compose up') {
            steps {
                bat 'docker compose up --abort-on-container-exit'
            }
        }

        stage('push to release') {
            steps {
                bat '''
                    git checkout release || git checkout -b release
                    SET GIT_SSH_COMMAND="ssh -i $SSH_KEY"
                    git push --verbose origin release
                '''
            }
        }

        stage('success') {
            steps {
                bat 'echo SUCCESS'
            }
        }
    }
}
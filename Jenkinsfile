pipeline {
    agent any
    environment {
        PAT = credentials('PAT')
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
                withCredentials([sshUserPrivateKey(credentialsId: 'github_credentials', keyFileVariable: 'SSH_KEY')]) {
                    bat 'git checkout release || git checkout -b release'
                    bat '''
                        SET GIT_SSH_COMMAND="ssh -i $SSH_KEY"
                        git push --verbose origin release
                    '''
                }
            }
        }

        stage('success') {
            steps {
                bat 'echo SUCCESS'
            }
        }
    }
}
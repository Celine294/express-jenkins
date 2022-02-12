pipeline {
    agent any

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
                sshagent(credentials: ['github_credentials']) {
                    bat 'git checkout release || git checkout -b release'
                    bat 'git rebase origin/dev'
                    bat 'git push origin release'
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
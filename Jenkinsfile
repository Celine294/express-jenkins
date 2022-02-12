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

        stage('success') {
            steps {
                bat 'git checkout -b release'
                bat 'git push -u origin release'
            }
        }
    }
}
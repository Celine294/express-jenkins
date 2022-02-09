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
                bat 'docker compose up -d'
            }
        }
    }
}
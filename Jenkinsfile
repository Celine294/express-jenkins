pipeline {
    agent any

    stages {
        stage('docker compose up') {
            steps {
                bat 'docker compose up -d'
            }
        }
    }
}
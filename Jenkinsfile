pipeline {
    agent any

    stages {
        stage('docker build') {
            steps {
                bat 'docker build -t mynodeapp .'
            }
        }

        stage('docker run') {
            steps {
                bat 'docker run -p 3000:3000 -d mynodeapp'
            }
        }
    }
}
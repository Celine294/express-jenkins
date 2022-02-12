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
                bat 'git checkout release || git checkout -b release'
                bat 'git remote set-url origin https://${PAT}@github.com/Celine294/express-jenkins.git'
                bat 'git push --verbose origin release'
            }
        }

        stage('success') {
            steps {
                bat 'echo SUCCESS'
            }
        }
    }
}
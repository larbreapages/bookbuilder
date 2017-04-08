pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''
            make install
            make build
        '''
      }
    }
    stage('Test') {
      steps {
        sh '''
            make start-selenium &
            TRAVIS=true make test
        '''
      }
    }
  }
}

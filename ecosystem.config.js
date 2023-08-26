module.exports = [
  {
    script: 'node dist/apps/consistent-bets/main',
    name: 'consistent-bets'
    //exec_mode: 'cluster',
    //instances: 2
  }, 
  {
    script: 'node dist/apps/payments-worker/main',
    name: 'payments-worker'
  }
]

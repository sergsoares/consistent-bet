module.exports = [
  {
    script: 'dist/apps/consistent-bets/main',
    name: 'consistent-bets',
    exec_mode: 'cluster',
    instances: 2
  }, 
  {
    script: 'dist/apps/payments-worker/main',
    name: 'payments-worker'
  }
]

working_directory '/var/www/CubeGamesSinatra'
pid '/var/www/CubeGamesSinatra/pids/unicorn.pid'
stderr_path '/var/www/CubeGamesSinatra/logs/unicorn.log'
stdout_path '/var/www/CubeGamesSinatra/logs/unicorn.log'
listen '/tmp/unicorn.CubeGamesSinatra.sock'
# Number of processes
# worker_processes 4
worker_processes 4
# Time-out
timeout 30

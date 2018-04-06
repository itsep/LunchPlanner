# Lunch Planer Web Database

## Instalation of MariaDB

install on linux
```bash
$ sudo apt-get install mariadb-server
```

start on linux
```bash
$ /etc/init.d/mysql start
```
monitor-mode of mariaDB on linux as root
```bash
$ sudo mysql -u root -p -h localhost
```

create new user
```bash
MariaBD> CREATE USER 'name'@'localhost' IDENTIFIED BY 'password';
```

give User all rights
```bach
GRANT ALL PRIVILEGES ON * . * TO 'name'@'localhost';
```

monitor-mode of mariaDB on linux as user
```bash
$ sudo mysql -u root -p -h localhost;
```

stop on linux
```bash
$ /etc/init.d/mysql stop
```
# prawnet
Simple P2P botnet

Every instance acting as a client, there is no server. Execute shell commands in the mass using prawnet.

# install
```sh
git clone https://github.com/owocean/prawnet.git
cd prawnet
npm i
cp .env.example .env
npm install -g .
```
Do make sure to set a unique channel in `.env`

# usage
Running "slave" node
```sh
$ prawnet
```
Running "master" node
```sh
$ prawnet <shell command>
```
pretty intuitive 

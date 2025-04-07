# Ahamed Nilas WebApp (Node.js Version) - Launching on Local And EC2 instance

A simple Node.js web application displaying "Ahamed Nilas New WebApp".

## Local Deployment

1. Clone this repository
2. Install dependencies: `npm install`
3. Type : `npm install express dotenv`
4. initialize npm : `npm init -y`
5. Run the app: `npm start`
6. Access at: http://localhost:5000

## EC2 Deployment
1. Create EC2 Instance
2. Connect That Instance Via MobaXterm or Terminal
3. Install Dependencies : `sudo apt-get update` `sudo apt-get install -y nodejs`
4. install Git : `sudo apt install git`
5. clone repository : `https://github.com/Ahamed1727/Ahamed-Nilas-Web-App-Project--1`
6. open cloned repostory/directory and : 1 `npm install` 2 `npm install express dotenv`
7. Run The App : `npm start run`
8. then go to ec2 instance >> Security >> Security Group Name >> inbound rules >> Add Rule >> add Port : 5000 >> leave the rest as default And Save
9. ====================== Boom Your Web Application Launched Globally ==================================
10. Access at: http//yourec2publicIP:5000   

For development with auto-reload:
```bash
npm install -g nodemon
npm run dev
https://github.com/Ahamed1727/Ahamed-Nilas-Web-App-Project--1

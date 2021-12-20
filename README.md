# RepoProvas-API

## About 🕹️

This is an API made for the RepoProvas web application, an online repository for submitting and accessing college exams

(All registered teachers are fictitious)

You can check the front-end application here:
https://github.com/victordurco/repo-provas

And the working application here:
https://repo-provas-beige.vercel.app/

---

## How to run in your machine 🖥️

```
git clone https://github.com/victordurco/repo-provas-api
```

```
cd repo-provas-api
```

```
npm i
```

Create a .env.dev file and fill it using your environment variables following the example at .env.example file. (You can also create a .env.test file following the same .env.example, if you want to run the tests).

### In your terminal

```
sudo su postgres
```

```
psql
```

```
CREATE DATABASE repoprovas
```

```
\c repoprovas
```

Copy everything in the DATABASE.sql file and paste on the terminal</br>
You can not exit the postgres admin, and run

```
npm run dev

npm run test
(to run tests)
```

</br>

<br>

## 🧰 Tech Stack

<p align="center">
<img alt="typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
<img alt="postgres" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
<img alt="nodejs" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
<img alt="expressjs" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
<img alt="expressjs" src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white
"/>
</p>

<br>

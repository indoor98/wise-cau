// Node.js core modules
const path = require('path');
const http = require('http');

// express modules
const express = require('express');
const bodyParser = require('body-parser');

// database connection
const db = require('./util/database');

const app = express(); // express 객체 생성

app.listen(8000); // 8000번 포트 사용
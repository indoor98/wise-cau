// Node.js core modules
const path = require('path');
const http = require('http');

// express modules
const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // express 객체 생성

app.listen(8000); // 8000번 포트 사용
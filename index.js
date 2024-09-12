const express = require('express')
const app = express()
const {sendEmail} = require("./nodemailer")
const {fetchCloudwatchLogs} = require('./fetchCloudwatchLogs')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000

const INTEGRATION_NAME = {
    PERFIOS : 'Perfios',
    HUNTER : 'Hunter',
    POSIDEX : 'Posidex',
    CIBIL : 'Cibil',
    DMS : 'Dms',
    NO_INTEGRATION_NAME : 'no-integration-name'
  }

app.get('/', (req, res) => {
    res.send('Server is OK')
})

app.get('/send-email', (req, res) => {
    sendEmail();
    res.send('Send Email function called successfully')
})

app.get('/fetch-cloudwatch-logs', (req, res) => {
    const fetchCloudwatchLogsResult = fetchCloudwatchLogs()
    if(fetchCloudwatchLogsResult != null) res.send('Cloudwatch logs fetched successfully')
    else res.send('Cloudwatch logs fetch failed')
})

app.post('/submit-response', (req, res) => {
    console.log('Response: ', req.body)
    if(req.body.status === 'success')
        res.send('Request executed successfully')
    
    else if(req.body.status === 'fail')
        res.send('Request failed')

    else res.send('Unknown request')
})

app.post('/perfios', (req, res) => {
    console.log('Perfios API called...')
    if(req.body.statusCode){
        if(req.body.eventName === INTEGRATION_NAME.PERFIOS){
            res.json({
                "eventName" : INTEGRATION_NAME.PERFIOS,
                "statusCode" : req.body.statusCode,
                "message" : "OK"
            })
        }
        else {
            res.json({
                "eventName" : INTEGRATION_NAME.PERFIOS,
                "statusCode" : req.body.statusCode,
                "message" : "eventName is not Perfios"
            })
        }
    }
    else
        res.json({
            "eventName" : INTEGRATION_NAME.PERFIOS,
            "statusCode" : "400",
            "message" : "statusCode not provided"
        })
})


app.post('/hunter', (req, res) => {
    console.log('Hunter API called...')
    if(req.body.statusCode){
        if(req.body.eventName === INTEGRATION_NAME.HUNTER){
            res.json({
                "eventName" : INTEGRATION_NAME.HUNTER,
                "statusCode" : req.body.statusCode,
                "message" : "OK"
            })
        }
        else {
            res.json({
                "eventName" : INTEGRATION_NAME.HUNTER,
                "statusCode" : req.body.statusCode,
                "message" : "eventName is not Hunter"
            })
        }
    }
    else
        res.json({
            "eventName" : INTEGRATION_NAME.HUNTER,
            "statusCode" : "400",
            "message" : "statusCode not provided"
        })
})

app.post('/posidex', (req, res) => {
    console.log('Posidex API called...')
    if(req.body.statusCode){
        if(req.body.eventName === INTEGRATION_NAME.POSIDEX){
            res.json({
                "eventName" : INTEGRATION_NAME.POSIDEX,
                "statusCode" : req.body.statusCode,
                "message" : "OK"
            })
        }
        else {
            res.json({
                "eventName" : INTEGRATION_NAME.POSIDEX,
                "statusCode" : req.body.statusCode,
                "message" : "eventName is not Posidex"
            })
        }
    }
    else
        res.json({
            "eventName" : INTEGRATION_NAME.POSIDEX,
            "statusCode" : "400",
            "message" : "statusCode not provided"
        })
})

app.post('/cibil', (req, res) => {
    console.log('Cibil API called...')
    if(req.body.statusCode){
        if(req.body.eventName === INTEGRATION_NAME.CIBIL){
            res.json({
                "eventName" : INTEGRATION_NAME.CIBIL,
                "statusCode" : req.body.statusCode,
                "message" : "OK"
            })
        }
        else {
            res.json({
                "eventName" : INTEGRATION_NAME.CIBIL,
                "statusCode" : req.body.statusCode,
                "message" : "eventName is not Cibil"
            })
        }
    }
    else
        res.json({
            "eventName" : INTEGRATION_NAME.CIBIL,
            "statusCode" : "400",
            "message" : "statusCode not provided"
        })
})

app.post('/dms', (req, res) => {
    console.log('DMS API called...')
    if(req.body.statusCode){
        if(req.body.eventName === INTEGRATION_NAME.DMS){
            res.json({
                "eventName" : INTEGRATION_NAME.DMS,
                "statusCode" : req.body.statusCode,
                "message" : "OK"
            })
        }
        else {
            res.json({
                "eventName" : INTEGRATION_NAME.DMS,
                "statusCode" : req.body.statusCode,
                "message" : "eventName is not Dms"
            })
        }
    }
    else
        res.json({
            "eventName" : INTEGRATION_NAME.DMS,
            "statusCode" : "400",
            "message" : "statusCode not provided"
        })
})

app.post('/no-integration-name', (req, res) => {
    console.log('No-integration-name API called...')
    if(req.body.statusCode){
        if(req.body.eventName === INTEGRATION_NAME.NO_INTEGRATION_NAME){
            res.json({
                "eventName" : INTEGRATION_NAME.NO_INTEGRATION_NAME,
                "statusCode" : req.body.statusCode,
                "message" : "OK"
            })
        }
        else {
            res.json({
                "eventName" : INTEGRATION_NAME.NO_INTEGRATION_NAME,
                "statusCode" : req.body.statusCode,
                "message" : "eventName is not No-integration-name"
            })
        }
    }
    else
        res.json({
            "eventName" : INTEGRATION_NAME.NO_INTEGRATION_NAME,
            "statusCode" : "400",
            "message" : "statusCode not provided"
        })
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})



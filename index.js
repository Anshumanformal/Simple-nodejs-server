const express = require('express')
const app = express()

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
    if(req.statusCode == 200)
        res.status(200).send('Status 200 sent')
    else
        res.status(400).send('Error in API')
})

app.post('/cibil', (req, res) => {
    console.log('Cibil API called...')
    if(req.statusCode == 200)
        res.status(200).send('Status 200 sent')
    else
        res.status(400).send('Error in API')
})

app.post('/dms', (req, res) => {
    console.log('DMS API called...')
    if(req.statusCode == 200)
        res.status(200).send('Status 200 sent')
    else
        res.status(400).send('Error in API')
})

app.post('/no-integration-name', (req, res) => {
    console.log('No-integration-name API called...')
    if(req.statusCode == 200)
        res.status(200).send('Status 200 sent')
    else
        res.status(400).send('Error in API')
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})



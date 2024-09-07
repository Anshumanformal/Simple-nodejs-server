const AWS = require('aws-sdk');

const fetchLogsByTransactionId = async (logGroupName, id, cloudwatchlogs) => {
    const params = {
        logGroupName: logGroupName, // Name of your CloudWatch log group
        filterPattern: `${id}`, // Filter logs that contain the transactionId
        limit: 100 // Optional: Set a limit for the number of logs returned
    };

    try {
        const data = await cloudwatchlogs.filterLogEvents(params).promise();

        // Log the filtered events
        console.log(`Found ${data.events.length} log events:`);
        data.events.forEach(event => {
            console.log(`Log event: ${event.message}`);
        });

        return data.events;
    } catch (error) {
        console.error("Error fetching logs:", error);
    }
};

module.exports.fetchCloudwatchLogs = () => {


// Configure the region (make sure to replace 'us-east-1' with your correct region)
AWS.config.update({
  accessKeyId: "AKIAYCRX2VFI7HWWQ45Y",
  secretAccessKey: "59BkJeow6fHWtyee+FZDq25ZnMxiROv6B/jlDnRu",
  region: "us-east-1",
});

// Create a new instance of CloudWatchLogs
const cloudwatchlogs = new AWS.CloudWatchLogs();

const logGroupName = "/aws/events/ProfileUpdateRule"
const transactionId = '{$.transaction_id = "e7486920-2064-6389-e7ce-784404de918e"}'

// Function to get logs using transaction ID
// const fetchLogsByTransactionIdResult = fetchLogsByTransactionId(logGroupName, transactionId, cloudwatchlogs);
const fetchLogsByTransactionIdResult = fetchLogsByTransactionId(logGroupName, id, cloudwatchlogs);

return fetchLogsByTransactionIdResult
}

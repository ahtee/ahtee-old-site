export default {
  s3: {
    REGION: process.env.S3_UPLOADS_BUCKET_REGION,
    BUCKET: process.env.YOUR_S3_UPLOADS_BUCKET_NAME,
  },
  apiGateway: {
    REGION: process.env.API_GATEWAY_REGION,
    URL: process.env.API_GATEWAY_URL,
  },
  cognito: {
    REGION: process.env.COGNITO_REGION,
    USER_POOL_ID: process.env.YOUR_COGNITO_USER_POOL_ID,
    APP_CLIENT_ID: process.env.YOUR_COGNITO_APP_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.YOUR_IDENTITY_POOL_ID,
  },
}

export const Config = {
  EGNC_backend: "http://localhost:8080/MainService",
  BOM_backend: "http://localhost:8080/BomService",
  EXPORT_backend: "http://localhost:8080/ExportService",
  AUTH_backend: "http://localhost:8080/auth",
  ATTACHMENT_backend: "http://localhost:8080/AttachmentService",
  SSO_backend: "http://localhost:8080/auth",
  NEWSLETTER_backend: "https://newsletter-service.gosaas.io",
  OBJECT_card: {
    item: true,
    mpn: true,
    partGroup: true
  },
  THINGS_card: {
    pendingApprovals: true,
    pendingReq: true
  },
  NEWSLETTER: {
    PRODUCT: "EGNC_TEST",
    CLIENT_ID: "EGNC_clientId_test",
    CLIENT_SECRET_ACCESS_KEY: "EGNC_secretKey_test"
  }
}
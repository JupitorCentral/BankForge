rootProject.name = "BankForge"

include(
    "account-command-service",
    "account-query-service", 
    "auth-service",
    "event-store-service",
    "monitoring-service",
    "notification-service",
    "shared-common",
    "transaction-command-service",
    "transaction-query-service"
)

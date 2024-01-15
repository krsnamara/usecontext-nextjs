-- CreateTable
CREATE TABLE "Rock" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rock" TEXT NOT NULL,
    "lastSeen" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

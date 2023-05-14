/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `User_Table` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_Table_username_key" ON "User_Table"("username");

/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User_Table` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `User_Table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User_Table" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_Table_email_key" ON "User_Table"("email");

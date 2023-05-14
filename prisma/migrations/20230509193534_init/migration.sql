/*
  Warnings:

  - Changed the type of `graphType` on the `Graph` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Graph" DROP COLUMN "graphType",
ADD COLUMN     "graphType" TEXT NOT NULL;

-- DropEnum
DROP TYPE "GraphType";

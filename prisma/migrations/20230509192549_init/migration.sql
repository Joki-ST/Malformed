/*
  Warnings:

  - Added the required column `graphType` to the `Graph` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "GraphType" AS ENUM ('BarGraph', 'LineGraph', 'CircleGraph', 'ScatterGraph', 'RadarGraph');

-- AlterTable
ALTER TABLE "Graph" DROP COLUMN "graphType",
ADD COLUMN     "graphType" "GraphType" NOT NULL;

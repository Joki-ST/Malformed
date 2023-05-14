-- CreateTable
CREATE TABLE "User_Table" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_Table_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Graph" (
    "id" SERIAL NOT NULL,
    "graphValue_x" TEXT NOT NULL,
    "graphValue_y" TEXT NOT NULL,
    "dataCircle" TEXT NOT NULL,
    "dataScatter" TEXT NOT NULL,
    "dataRadar" TEXT NOT NULL,
    "graphType" TEXT NOT NULL,

    CONSTRAINT "Graph_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_Has_Graph" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "graphId" INTEGER NOT NULL,

    CONSTRAINT "User_Has_Graph_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User_Has_Graph" ADD CONSTRAINT "User_Has_Graph_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User_Table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Has_Graph" ADD CONSTRAINT "User_Has_Graph_graphId_fkey" FOREIGN KEY ("graphId") REFERENCES "Graph"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

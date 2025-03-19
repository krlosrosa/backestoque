/*
  Warnings:

  - You are about to drop the column `data` on the `Counted` table. All the data in the column will be lost.
  - Added the required column `dataregistro` to the `Counted` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Counted" DROP COLUMN "data",
ADD COLUMN     "dataregistro" TEXT NOT NULL;

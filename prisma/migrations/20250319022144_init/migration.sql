/*
  Warnings:

  - You are about to drop the column `dataregistro` on the `Counted` table. All the data in the column will be lost.
  - Added the required column `data` to the `Counted` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Counted" DROP COLUMN "dataregistro",
ADD COLUMN     "data" TEXT NOT NULL;

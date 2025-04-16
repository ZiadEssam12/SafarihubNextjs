/*
  Warnings:

  - The `excluded` column on the `Tour` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `included` column on the `Tour` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Tour" DROP COLUMN "excluded",
ADD COLUMN     "excluded" TEXT[],
DROP COLUMN "included",
ADD COLUMN     "included" TEXT[];

/*
  Warnings:

  - Added the required column `content` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Overview" ALTER COLUMN "caption" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "content" TEXT NOT NULL,
ALTER COLUMN "demoUrl" DROP NOT NULL,
ALTER COLUMN "delivery" DROP NOT NULL;

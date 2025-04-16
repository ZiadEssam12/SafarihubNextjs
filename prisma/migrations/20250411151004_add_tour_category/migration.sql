-- CreateEnum
CREATE TYPE "TourCategory" AS ENUM ('ONE_DAY_TOUR', 'MULTI_DAYS_TOUR', 'NILE_CRUISES', 'SHORE_EXCURSION', 'HIDDEN_GEMS');

-- CreateTable
CREATE TABLE "Tour" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "reviews_number" INTEGER NOT NULL DEFAULT 0,
    "adult_price" DOUBLE PRECISION NOT NULL,
    "child_price" DOUBLE PRECISION NOT NULL,
    "infant_price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "gallery" TEXT[],
    "duration_in_days" INTEGER NOT NULL,
    "offer" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "offer_end_date" TIMESTAMP(3),
    "start_from" DOUBLE PRECISION NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "category" "TourCategory" NOT NULL,
    "overview_text" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "highlights" TEXT NOT NULL,
    "excluded" TEXT NOT NULL,
    "included" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PricingGroup" (
    "id" SERIAL NOT NULL,
    "from" INTEGER NOT NULL,
    "to" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "child_price" DOUBLE PRECISION NOT NULL,
    "tourId" INTEGER NOT NULL,

    CONSTRAINT "PricingGroup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tour_slug_key" ON "Tour"("slug");

-- AddForeignKey
ALTER TABLE "PricingGroup" ADD CONSTRAINT "PricingGroup_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;


## Get raster data
library("raster")

prec <- getData("worldclim", var="prec", res=10, path="~")
plot(prec$prec1)


## Get vector data
fra  <- getData("GADM", country="FRA", level=0, path="~")
plot(fra)


## Set extent
cropped_prec <- crop(prec, extent(fra))
plot(cropped_prec$prec1)


## Vector operations
clipped_prec <- mask(cropped_prec, fra)
plot(clipped_prec$prec1)


## Raster operations
clipped_prec_sum <- sum(clipped_prec)
clipped_prec_sum_2 <- raster::stackApply(clipped_prec, rep(1,12), sum, na.rm=FALSE)
plot(clipped_prec_sum)


## Mapping
plot(clipped_prec_sum)
plot(fra, add=T)
points(2.349014, 48.864716, pch=8, cex=2) # roughly the location of Paris


## Write out
jpeg("FirstSimpleMap.jpg")
plot(clipped_prec_sum)
plot(fra, add=T)
points(2.349014, 48.864716, pch=8, cex=2)
dev.off()


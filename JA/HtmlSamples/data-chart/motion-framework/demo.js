$(function () {
            var moviesOverTime = null,
                minYear = 1888,
                maxYear = 2010,
                viewport = {},
                wind = {},
                dataSource = null,
                getYear = null,
                currData = null,
                updateYearOverlay = null,
                updateYearText = null,
                currentYear = 1888,
                changeYear = null,
                playing = false,
                intervalId = 0,
                isRadial = true,
                maxValue = 400,
                localizedGenres = null,
                angleLabelExtent = 40;

            moviesOverTime = [
            { 'Year': 1888, 'Indie': 1, 'Short film': 1, 'Silent film': 1, 'Animation': 0, 'Documentary': 0, 'Comedy': 0, 'Horror': 0, 'Adventure': 0, 'Drama': 0, 'Family': 0, 'Crime fiction': 0, 'Science fiction': 0, 'Romance film': 0, 'Thriller': 0, 'Action': 0, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1889, 'Indie': 1, 'Short film': 1, 'Silent film': 1, 'Animation': 0, 'Documentary': 0, 'Comedy': 0, 'Horror': 0, 'Adventure': 0, 'Drama': 0, 'Family': 0, 'Crime fiction': 0, 'Science fiction': 0, 'Romance film': 0, 'Thriller': 0, 'Action': 0, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1890, 'Indie': 1, 'Short film': 1, 'Silent film': 1, 'Animation': 0, 'Documentary': 0, 'Comedy': 0, 'Horror': 0, 'Adventure': 0, 'Drama': 0, 'Family': 0, 'Crime fiction': 0, 'Science fiction': 0, 'Romance film': 0, 'Thriller': 0, 'Action': 0, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1891, 'Indie': 1, 'Short film': 1, 'Silent film': 1, 'Animation': 0, 'Documentary': 0, 'Comedy': 0, 'Horror': 0, 'Adventure': 0, 'Drama': 0, 'Family': 0, 'Crime fiction': 0, 'Science fiction': 0, 'Romance film': 0, 'Thriller': 0, 'Action': 0, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1892, 'Indie': 3, 'Short film': 1, 'Silent film': 3, 'Animation': 3, 'Documentary': 0, 'Comedy': 0, 'Horror': 0, 'Adventure': 0, 'Drama': 0, 'Family': 0, 'Crime fiction': 0, 'Science fiction': 0, 'Romance film': 0, 'Thriller': 0, 'Action': 0, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1893, 'Indie': 1, 'Short film': 1, 'Silent film': 1, 'Animation': 0, 'Documentary': 0, 'Comedy': 0, 'Horror': 0, 'Adventure': 0, 'Drama': 0, 'Family': 0, 'Crime fiction': 0, 'Science fiction': 0, 'Romance film': 0, 'Thriller': 0, 'Action': 0, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1894, 'Indie': 7, 'Short film': 8, 'Silent film': 7, 'Animation': 0, 'Documentary': 3, 'Comedy': 0, 'Horror': 0, 'Adventure': 0, 'Drama': 0, 'Family': 0, 'Crime fiction': 0, 'Science fiction': 0, 'Romance film': 0, 'Thriller': 0, 'Action': 0, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1895, 'Indie': 16, 'Short film': 16, 'Silent film': 16, 'Animation': 1, 'Documentary': 12, 'Comedy': 2, 'Horror': 0, 'Adventure': 0, 'Drama': 0, 'Family': 0, 'Crime fiction': 0, 'Science fiction': 0, 'Romance film': 0, 'Thriller': 0, 'Action': 0, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1896, 'Indie': 15, 'Short film': 25, 'Silent film': 31, 'Animation': 0, 'Documentary': 22, 'Comedy': 0, 'Horror': 1, 'Adventure': 0, 'Drama': 0, 'Family': 0, 'Crime fiction': 0, 'Science fiction': 0, 'Romance film': 0, 'Thriller': 0, 'Action': 0, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1897, 'Indie': 3, 'Short film': 4, 'Silent film': 3, 'Animation': 0, 'Documentary': 0, 'Comedy': 2, 'Horror': 0, 'Adventure': 1, 'Drama': 2, 'Family': 1, 'Crime fiction': 0, 'Science fiction': 0, 'Romance film': 0, 'Thriller': 0, 'Action': 0, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1898, 'Indie': 11, 'Short film': 10, 'Silent film': 11, 'Animation': 0, 'Documentary': 1, 'Comedy': 1, 'Horror': 0, 'Adventure': 0, 'Drama': 0, 'Family': 0, 'Crime fiction': 0, 'Science fiction': 0, 'Romance film': 0, 'Thriller': 0, 'Action': 0, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1899, 'Indie': 1, 'Short film': 2, 'Silent film': 2, 'Animation': 0, 'Documentary': 0, 'Comedy': 0, 'Horror': 1, 'Adventure': 0, 'Drama': 0, 'Family': 0, 'Crime fiction': 0, 'Science fiction': 0, 'Romance film': 0, 'Thriller': 0, 'Action': 0, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1900, 'Indie': 10, 'Short film': 10, 'Silent film': 11, 'Animation': 0, 'Documentary': 1, 'Comedy': 0, 'Horror': 0, 'Adventure': 0, 'Drama': 0, 'Family': 0, 'Crime fiction': 0, 'Science fiction': 0, 'Romance film': 0, 'Thriller': 0, 'Action': 0, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1901, 'Indie': 9, 'Short film': 5, 'Silent film': 11, 'Animation': 0, 'Documentary': 4, 'Comedy': 1, 'Horror': 0, 'Adventure': 0, 'Drama': 1, 'Family': 0, 'Crime fiction': 0, 'Science fiction': 0, 'Romance film': 0, 'Thriller': 0, 'Action': 0, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1902, 'Indie': 5, 'Short film': 5, 'Silent film': 5, 'Animation': 1, 'Documentary': 0, 'Comedy': 1, 'Horror': 0, 'Adventure': 1, 'Drama': 0, 'Family': 0, 'Crime fiction': 1, 'Science fiction': 1, 'Romance film': 0, 'Thriller': 0, 'Action': 0, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1903, 'Indie': 6, 'Short film': 5, 'Silent film': 8, 'Animation': 0, 'Documentary': 0, 'Comedy': 1, 'Horror': 1, 'Adventure': 1, 'Drama': 0, 'Family': 0, 'Crime fiction': 0, 'Science fiction': 0, 'Romance film': 0, 'Thriller': 0, 'Action': 0, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1904, 'Indie': 2, 'Short film': 1, 'Silent film': 3, 'Animation': 0, 'Documentary': 1, 'Comedy': 0, 'Horror': 0, 'Adventure': 1, 'Drama': 0, 'Family': 0, 'Crime fiction': 0, 'Science fiction': 1, 'Romance film': 0, 'Thriller': 0, 'Action': 0, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1905, 'Indie': 0, 'Short film': 7, 'Silent film': 3, 'Animation': 0, 'Documentary': 0, 'Comedy': 0, 'Horror': 0, 'Adventure': 0, 'Drama': 2, 'Family': 0, 'Crime fiction': 0, 'Science fiction': 0, 'Romance film': 0, 'Thriller': 0, 'Action': 0, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1906, 'Indie': 2, 'Short film': 2, 'Silent film': 3, 'Animation': 1, 'Documentary': 0, 'Comedy': 1, 'Horror': 0, 'Adventure': 0, 'Drama': 1, 'Family': 0, 'Crime fiction': 1, 'Science fiction': 0, 'Romance film': 0, 'Thriller': 0, 'Action': 0, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1907, 'Indie': 11, 'Short film': 9, 'Silent film': 15, 'Animation': 0, 'Documentary': 1, 'Comedy': 1, 'Horror': 0, 'Adventure': 0, 'Drama': 1, 'Family': 0, 'Crime fiction': 0, 'Science fiction': 0, 'Romance film': 0, 'Thriller': 0, 'Action': 0, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1908, 'Indie': 12, 'Short film': 15, 'Silent film': 19, 'Animation': 1, 'Documentary': 0, 'Comedy': 1, 'Horror': 1, 'Adventure': 0, 'Drama': 5, 'Family': 0, 'Crime fiction': 1, 'Science fiction': 0, 'Romance film': 1, 'Thriller': 0, 'Action': 0, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1909, 'Indie': 26, 'Short film': 30, 'Silent film': 35, 'Animation': 0, 'Documentary': 0, 'Comedy': 5, 'Horror': 1, 'Adventure': 0, 'Drama': 19, 'Family': 0, 'Crime fiction': 0, 'Science fiction': 0, 'Romance film': 0, 'Thriller': 0, 'Action': 0, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1910, 'Indie': 21, 'Short film': 34, 'Silent film': 33, 'Animation': 0, 'Documentary': 2, 'Comedy': 4, 'Horror': 1, 'Adventure': 0, 'Drama': 19, 'Family': 0, 'Crime fiction': 0, 'Science fiction': 1, 'Romance film': 1, 'Thriller': 0, 'Action': 0, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1911, 'Indie': 37, 'Short film': 95, 'Silent film': 74, 'Animation': 0, 'Documentary': 0, 'Comedy': 6, 'Horror': 0, 'Adventure': 2, 'Drama': 46, 'Family': 1, 'Crime fiction': 0, 'Science fiction': 1, 'Romance film': 4, 'Thriller': 1, 'Action': 0, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1912, 'Indie': 67, 'Short film': 119, 'Silent film': 103, 'Animation': 2, 'Documentary': 2, 'Comedy': 12, 'Horror': 2, 'Adventure': 1, 'Drama': 61, 'Family': 0, 'Crime fiction': 2, 'Science fiction': 1, 'Romance film': 3, 'Thriller': 2, 'Action': 1, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1913, 'Indie': 151, 'Short film': 221, 'Silent film': 195, 'Animation': 1, 'Documentary': 0, 'Comedy': 52, 'Horror': 2, 'Adventure': 3, 'Drama': 90, 'Family': 0, 'Crime fiction': 2, 'Science fiction': 1, 'Romance film': 4, 'Thriller': 0, 'Action': 1, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1914, 'Indie': 220, 'Short film': 298, 'Silent film': 288, 'Animation': 2, 'Documentary': 2, 'Comedy': 135, 'Horror': 1, 'Adventure': 7, 'Drama': 90, 'Family': 2, 'Crime fiction': 1, 'Science fiction': 0, 'Romance film': 3, 'Thriller': 0, 'Action': 1, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1915, 'Indie': 203, 'Short film': 240, 'Silent film': 307, 'Animation': 0, 'Documentary': 3, 'Comedy': 106, 'Horror': 1, 'Adventure': 7, 'Drama': 113, 'Family': 0, 'Crime fiction': 4, 'Science fiction': 1, 'Romance film': 0, 'Thriller': 2, 'Action': 3, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1916, 'Indie': 168, 'Short film': 163, 'Silent film': 254, 'Animation': 0, 'Documentary': 2, 'Comedy': 117, 'Horror': 2, 'Adventure': 3, 'Drama': 68, 'Family': 0, 'Crime fiction': 2, 'Science fiction': 2, 'Romance film': 0, 'Thriller': 0, 'Action': 3, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1917, 'Indie': 124, 'Short film': 106, 'Silent film': 199, 'Animation': 1, 'Documentary': 0, 'Comedy': 73, 'Horror': 1, 'Adventure': 6, 'Drama': 50, 'Family': 0, 'Crime fiction': 3, 'Science fiction': 1, 'Romance film': 4, 'Thriller': 0, 'Action': 4, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1918, 'Indie': 130, 'Short film': 83, 'Silent film': 198, 'Animation': 1, 'Documentary': 1, 'Comedy': 86, 'Horror': 3, 'Adventure': 6, 'Drama': 59, 'Family': 0, 'Crime fiction': 1, 'Science fiction': 2, 'Romance film': 5, 'Thriller': 0, 'Action': 1, 'Musical': 1, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1919, 'Indie': 138, 'Short film': 97, 'Silent film': 204, 'Animation': 2, 'Documentary': 1, 'Comedy': 78, 'Horror': 2, 'Adventure': 5, 'Drama': 51, 'Family': 2, 'Crime fiction': 3, 'Science fiction': 2, 'Romance film': 8, 'Thriller': 3, 'Action': 4, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1920, 'Indie': 127, 'Short film': 65, 'Silent film': 206, 'Animation': 0, 'Documentary': 0, 'Comedy': 31, 'Horror': 7, 'Adventure': 10, 'Drama': 53, 'Family': 1, 'Crime fiction': 3, 'Science fiction': 4, 'Romance film': 6, 'Thriller': 2, 'Action': 6, 'Musical': 0, 'Action/Adventure': 2, 'Sports': 1 },
            { 'Year': 1921, 'Indie': 91, 'Short film': 40, 'Silent film': 159, 'Animation': 2, 'Documentary': 3, 'Comedy': 29, 'Horror': 1, 'Adventure': 7, 'Drama': 52, 'Family': 2, 'Crime fiction': 3, 'Science fiction': 1, 'Romance film': 8, 'Thriller': 0, 'Action': 5, 'Musical': 1, 'Action/Adventure': 1, 'Sports': 0 },
            { 'Year': 1922, 'Indie': 83, 'Short film': 30, 'Silent film': 146, 'Animation': 1, 'Documentary': 1, 'Comedy': 28, 'Horror': 2, 'Adventure': 5, 'Drama': 48, 'Family': 1, 'Crime fiction': 5, 'Science fiction': 0, 'Romance film': 6, 'Thriller': 3, 'Action': 3, 'Musical': 1, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1923, 'Indie': 103, 'Short film': 49, 'Silent film': 159, 'Animation': 1, 'Documentary': 1, 'Comedy': 31, 'Horror': 3, 'Adventure': 5, 'Drama': 42, 'Family': 1, 'Crime fiction': 4, 'Science fiction': 2, 'Romance film': 7, 'Thriller': 1, 'Action': 5, 'Musical': 1, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1924, 'Indie': 79, 'Short film': 42, 'Silent film': 172, 'Animation': 1, 'Documentary': 0, 'Comedy': 37, 'Horror': 3, 'Adventure': 7, 'Drama': 57, 'Family': 1, 'Crime fiction': 1, 'Science fiction': 3, 'Romance film': 7, 'Thriller': 1, 'Action': 1, 'Musical': 0, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1925, 'Indie': 80, 'Short film': 75, 'Silent film': 184, 'Animation': 1, 'Documentary': 2, 'Comedy': 52, 'Horror': 6, 'Adventure': 8, 'Drama': 60, 'Family': 0, 'Crime fiction': 3, 'Science fiction': 2, 'Romance film': 8, 'Thriller': 1, 'Action': 2, 'Musical': 0, 'Action/Adventure': 1, 'Sports': 0 },
            { 'Year': 1926, 'Indie': 82, 'Short film': 65, 'Silent film': 172, 'Animation': 2, 'Documentary': 2, 'Comedy': 47, 'Horror': 5, 'Adventure': 8, 'Drama': 46, 'Family': 0, 'Crime fiction': 0, 'Science fiction': 0, 'Romance film': 7, 'Thriller': 3, 'Action': 7, 'Musical': 1, 'Action/Adventure': 1, 'Sports': 0 },
            { 'Year': 1927, 'Indie': 82, 'Short film': 61, 'Silent film': 168, 'Animation': 1, 'Documentary': 3, 'Comedy': 60, 'Horror': 2, 'Adventure': 8, 'Drama': 45, 'Family': 1, 'Crime fiction': 4, 'Science fiction': 1, 'Romance film': 11, 'Thriller': 3, 'Action': 9, 'Musical': 2, 'Action/Adventure': 0, 'Sports': 0 },
            { 'Year': 1928, 'Indie': 62, 'Short film': 70, 'Silent film': 137, 'Animation': 3, 'Documentary': 1, 'Comedy': 48, 'Horror': 5, 'Adventure': 6, 'Drama': 60, 'Family': 1, 'Crime fiction': 5, 'Science fiction': 1, 'Romance film': 13, 'Thriller': 1, 'Action': 2, 'Musical': 4, 'Action/Adventure': 1, 'Sports': 0 },
            { 'Year': 1929, 'Indie': 34, 'Short film': 70, 'Silent film': 90, 'Animation': 4, 'Documentary': 5, 'Comedy': 57, 'Horror': 0, 'Adventure': 9, 'Drama': 75, 'Family': 2, 'Crime fiction': 7, 'Science fiction': 2, 'Romance film': 23, 'Thriller': 5, 'Action': 9, 'Musical': 32, 'Action/Adventure': 2, 'Sports': 0 },
            { 'Year': 1930, 'Indie': 17, 'Short film': 35, 'Silent film': 23, 'Animation': 4, 'Documentary': 6, 'Comedy': 53, 'Horror': 2, 'Adventure': 8, 'Drama': 66, 'Family': 3, 'Crime fiction': 9, 'Science fiction': 3, 'Romance film': 20, 'Thriller': 9, 'Action': 14, 'Musical': 46, 'Action/Adventure': 1, 'Sports': 0 },
            { 'Year': 1931, 'Indie': 5, 'Short film': 68, 'Silent film': 9, 'Animation': 2, 'Documentary': 2, 'Comedy': 79, 'Horror': 7, 'Adventure': 16, 'Drama': 94, 'Family': 4, 'Crime fiction': 16, 'Science fiction': 3, 'Romance film': 25, 'Thriller': 9, 'Action': 13, 'Musical': 16, 'Action/Adventure': 1, 'Sports': 2 },
            { 'Year': 1932, 'Indie': 6, 'Short film': 51, 'Silent film': 10, 'Animation': 2, 'Documentary': 2, 'Comedy': 74, 'Horror': 13, 'Adventure': 14, 'Drama': 105, 'Family': 4, 'Crime fiction': 27, 'Science fiction': 2, 'Romance film': 20, 'Thriller': 21, 'Action': 18, 'Musical': 8, 'Action/Adventure': 2, 'Sports': 4 },
            { 'Year': 1933, 'Indie': 6, 'Short film': 50, 'Silent film': 9, 'Animation': 3, 'Documentary': 6, 'Comedy': 74, 'Horror': 6, 'Adventure': 15, 'Drama': 99, 'Family': 5, 'Crime fiction': 15, 'Science fiction': 3, 'Romance film': 30, 'Thriller': 11, 'Action': 23, 'Musical': 27, 'Action/Adventure': 4, 'Sports': 2 },
            { 'Year': 1934, 'Indie': 6, 'Short film': 45, 'Silent film': 6, 'Animation': 4, 'Documentary': 4, 'Comedy': 91, 'Horror': 2, 'Adventure': 17, 'Drama': 116, 'Family': 15, 'Crime fiction': 14, 'Science fiction': 3, 'Romance film': 45, 'Thriller': 20, 'Action': 23, 'Musical': 41, 'Action/Adventure': 0, 'Sports': 3 },
            { 'Year': 1935, 'Indie': 5, 'Short film': 42, 'Silent film': 4, 'Animation': 2, 'Documentary': 3, 'Comedy': 77, 'Horror': 8, 'Adventure': 23, 'Drama': 105, 'Family': 7, 'Crime fiction': 18, 'Science fiction': 3, 'Romance film': 31, 'Thriller': 18, 'Action': 29, 'Musical': 36, 'Action/Adventure': 2, 'Sports': 0 },
            { 'Year': 1936, 'Indie': 3, 'Short film': 46, 'Silent film': 3, 'Animation': 2, 'Documentary': 4, 'Comedy': 96, 'Horror': 11, 'Adventure': 16, 'Drama': 115, 'Family': 8, 'Crime fiction': 24, 'Science fiction': 8, 'Romance film': 38, 'Thriller': 24, 'Action': 23, 'Musical': 33, 'Action/Adventure': 5, 'Sports': 5 },
            { 'Year': 1937, 'Indie': 0, 'Short film': 63, 'Silent film': 0, 'Animation': 7, 'Documentary': 4, 'Comedy': 86, 'Horror': 2, 'Adventure': 31, 'Drama': 120, 'Family': 8, 'Crime fiction': 34, 'Science fiction': 1, 'Romance film': 42, 'Thriller': 17, 'Action': 33, 'Musical': 40, 'Action/Adventure': 6, 'Sports': 1 },
            { 'Year': 1938, 'Indie': 0, 'Short film': 43, 'Silent film': 1, 'Animation': 2, 'Documentary': 4, 'Comedy': 97, 'Horror': 2, 'Adventure': 19, 'Drama': 118, 'Family': 11, 'Crime fiction': 30, 'Science fiction': 2, 'Romance film': 38, 'Thriller': 15, 'Action': 19, 'Musical': 38, 'Action/Adventure': 2, 'Sports': 2 },
            { 'Year': 1939, 'Indie': 0, 'Short film': 38, 'Silent film': 0, 'Animation': 7, 'Documentary': 5, 'Comedy': 79, 'Horror': 9, 'Adventure': 24, 'Drama': 124, 'Family': 9, 'Crime fiction': 31, 'Science fiction': 3, 'Romance film': 29, 'Thriller': 21, 'Action': 31, 'Musical': 39, 'Action/Adventure': 3, 'Sports': 1 },
            { 'Year': 1940, 'Indie': 0, 'Short film': 34, 'Silent film': 0, 'Animation': 4, 'Documentary': 4, 'Comedy': 98, 'Horror': 11, 'Adventure': 28, 'Drama': 98, 'Family': 11, 'Crime fiction': 18, 'Science fiction': 7, 'Romance film': 33, 'Thriller': 20, 'Action': 24, 'Musical': 28, 'Action/Adventure': 5, 'Sports': 2 },
            { 'Year': 1941, 'Indie': 1, 'Short film': 46, 'Silent film': 1, 'Animation': 6, 'Documentary': 14, 'Comedy': 93, 'Horror': 11, 'Adventure': 16, 'Drama': 87, 'Family': 12, 'Crime fiction': 20, 'Science fiction': 5, 'Romance film': 34, 'Thriller': 22, 'Action': 29, 'Musical': 31, 'Action/Adventure': 8, 'Sports': 2 },
            { 'Year': 1942, 'Indie': 0, 'Short film': 51, 'Silent film': 0, 'Animation': 8, 'Documentary': 19, 'Comedy': 75, 'Horror': 11, 'Adventure': 24, 'Drama': 96, 'Family': 8, 'Crime fiction': 19, 'Science fiction': 6, 'Romance film': 39, 'Thriller': 25, 'Action': 34, 'Musical': 29, 'Action/Adventure': 12, 'Sports': 1 },
            { 'Year': 1943, 'Indie': 1, 'Short film': 58, 'Silent film': 0, 'Animation': 3, 'Documentary': 24, 'Comedy': 71, 'Horror': 12, 'Adventure': 13, 'Drama': 86, 'Family': 7, 'Crime fiction': 9, 'Science fiction': 3, 'Romance film': 27, 'Thriller': 12, 'Action': 24, 'Musical': 35, 'Action/Adventure': 4, 'Sports': 3 },
            { 'Year': 1944, 'Indie': 1, 'Short film': 24, 'Silent film': 0, 'Animation': 6, 'Documentary': 12, 'Comedy': 57, 'Horror': 15, 'Adventure': 12, 'Drama': 88, 'Family': 6, 'Crime fiction': 17, 'Science fiction': 4, 'Romance film': 33, 'Thriller': 25, 'Action': 16, 'Musical': 41, 'Action/Adventure': 2, 'Sports': 0 },
            { 'Year': 1945, 'Indie': 1, 'Short film': 35, 'Silent film': 0, 'Animation': 5, 'Documentary': 18, 'Comedy': 57, 'Horror': 13, 'Adventure': 15, 'Drama': 103, 'Family': 15, 'Crime fiction': 24, 'Science fiction': 1, 'Romance film': 26, 'Thriller': 31, 'Action': 23, 'Musical': 24, 'Action/Adventure': 4, 'Sports': 0 },
            { 'Year': 1946, 'Indie': 0, 'Short film': 70, 'Silent film': 0, 'Animation': 5, 'Documentary': 11, 'Comedy': 43, 'Horror': 9, 'Adventure': 17, 'Drama': 108, 'Family': 10, 'Crime fiction': 28, 'Science fiction': 0, 'Romance film': 30, 'Thriller': 34, 'Action': 20, 'Musical': 28, 'Action/Adventure': 1, 'Sports': 0 },
            { 'Year': 1947, 'Indie': 0, 'Short film': 30, 'Silent film': 1, 'Animation': 2, 'Documentary': 9, 'Comedy': 57, 'Horror': 2, 'Adventure': 17, 'Drama': 118, 'Family': 12, 'Crime fiction': 31, 'Science fiction': 1, 'Romance film': 26, 'Thriller': 30, 'Action': 14, 'Musical': 29, 'Action/Adventure': 1, 'Sports': 2 },
            { 'Year': 1948, 'Indie': 4, 'Short film': 30, 'Silent film': 1, 'Animation': 4, 'Documentary': 10, 'Comedy': 60, 'Horror': 2, 'Adventure': 16, 'Drama': 121, 'Family': 7, 'Crime fiction': 31, 'Science fiction': 3, 'Romance film': 27, 'Thriller': 28, 'Action': 18, 'Musical': 24, 'Action/Adventure': 4, 'Sports': 0 },
            { 'Year': 1949, 'Indie': 2, 'Short film': 23, 'Silent film': 0, 'Animation': 6, 'Documentary': 12, 'Comedy': 61, 'Horror': 4, 'Adventure': 22, 'Drama': 141, 'Family': 7, 'Crime fiction': 28, 'Science fiction': 1, 'Romance film': 34, 'Thriller': 26, 'Action': 21, 'Musical': 19, 'Action/Adventure': 2, 'Sports': 8 },
            { 'Year': 1950, 'Indie': 2, 'Short film': 26, 'Silent film': 0, 'Animation': 6, 'Documentary': 13, 'Comedy': 71, 'Horror': 0, 'Adventure': 22, 'Drama': 126, 'Family': 17, 'Crime fiction': 34, 'Science fiction': 6, 'Romance film': 32, 'Thriller': 22, 'Action': 17, 'Musical': 29, 'Action/Adventure': 5, 'Sports': 2 },
            { 'Year': 1951, 'Indie': 0, 'Short film': 30, 'Silent film': 0, 'Animation': 5, 'Documentary': 15, 'Comedy': 90, 'Horror': 5, 'Adventure': 17, 'Drama': 130, 'Family': 13, 'Crime fiction': 27, 'Science fiction': 14, 'Romance film': 32, 'Thriller': 28, 'Action': 19, 'Musical': 24, 'Action/Adventure': 3, 'Sports': 5 },
            { 'Year': 1952, 'Indie': 0, 'Short film': 27, 'Silent film': 0, 'Animation': 12, 'Documentary': 15, 'Comedy': 74, 'Horror': 2, 'Adventure': 28, 'Drama': 135, 'Family': 16, 'Crime fiction': 17, 'Science fiction': 8, 'Romance film': 47, 'Thriller': 22, 'Action': 27, 'Musical': 23, 'Action/Adventure': 4, 'Sports': 3 },
            { 'Year': 1953, 'Indie': 3, 'Short film': 23, 'Silent film': 1, 'Animation': 7, 'Documentary': 15, 'Comedy': 77, 'Horror': 12, 'Adventure': 32, 'Drama': 149, 'Family': 9, 'Crime fiction': 16, 'Science fiction': 22, 'Romance film': 35, 'Thriller': 26, 'Action': 27, 'Musical': 38, 'Action/Adventure': 4, 'Sports': 4 },
            { 'Year': 1954, 'Indie': 3, 'Short film': 21, 'Silent film': 1, 'Animation': 5, 'Documentary': 10, 'Comedy': 62, 'Horror': 11, 'Adventure': 36, 'Drama': 146, 'Family': 12, 'Crime fiction': 26, 'Science fiction': 17, 'Romance film': 38, 'Thriller': 28, 'Action': 20, 'Musical': 25, 'Action/Adventure': 7, 'Sports': 1 },
            { 'Year': 1955, 'Indie': 2, 'Short film': 28, 'Silent film': 0, 'Animation': 4, 'Documentary': 9, 'Comedy': 65, 'Horror': 12, 'Adventure': 25, 'Drama': 165, 'Family': 12, 'Crime fiction': 27, 'Science fiction': 12, 'Romance film': 50, 'Thriller': 27, 'Action': 23, 'Musical': 36, 'Action/Adventure': 4, 'Sports': 1 },
            { 'Year': 1956, 'Indie': 2, 'Short film': 31, 'Silent film': 0, 'Animation': 8, 'Documentary': 21, 'Comedy': 59, 'Horror': 16, 'Adventure': 18, 'Drama': 149, 'Family': 8, 'Crime fiction': 25, 'Science fiction': 18, 'Romance film': 40, 'Thriller': 23, 'Action': 17, 'Musical': 32, 'Action/Adventure': 8, 'Sports': 4 },
            { 'Year': 1957, 'Indie': 2, 'Short film': 44, 'Silent film': 1, 'Animation': 4, 'Documentary': 19, 'Comedy': 68, 'Horror': 34, 'Adventure': 16, 'Drama': 172, 'Family': 10, 'Crime fiction': 27, 'Science fiction': 33, 'Romance film': 54, 'Thriller': 30, 'Action': 32, 'Musical': 34, 'Action/Adventure': 3, 'Sports': 3 },
            { 'Year': 1958, 'Indie': 1, 'Short film': 41, 'Silent film': 0, 'Animation': 10, 'Documentary': 15, 'Comedy': 79, 'Horror': 35, 'Adventure': 17, 'Drama': 160, 'Family': 7, 'Crime fiction': 21, 'Science fiction': 30, 'Romance film': 38, 'Thriller': 35, 'Action': 22, 'Musical': 25, 'Action/Adventure': 7, 'Sports': 2 },
            { 'Year': 1959, 'Indie': 6, 'Short film': 36, 'Silent film': 0, 'Animation': 9, 'Documentary': 14, 'Comedy': 72, 'Horror': 33, 'Adventure': 22, 'Drama': 152, 'Family': 15, 'Crime fiction': 22, 'Science fiction': 29, 'Romance film': 32, 'Thriller': 32, 'Action': 21, 'Musical': 20, 'Action/Adventure': 5, 'Sports': 1 },
            { 'Year': 1960, 'Indie': 12, 'Short film': 26, 'Silent film': 1, 'Animation': 10, 'Documentary': 22, 'Comedy': 69, 'Horror': 27, 'Adventure': 20, 'Drama': 163, 'Family': 21, 'Crime fiction': 33, 'Science fiction': 16, 'Romance film': 46, 'Thriller': 23, 'Action': 21, 'Musical': 23, 'Action/Adventure': 6, 'Sports': 5 },
            { 'Year': 1961, 'Indie': 10, 'Short film': 60, 'Silent film': 1, 'Animation': 7, 'Documentary': 15, 'Comedy': 67, 'Horror': 26, 'Adventure': 19, 'Drama': 140, 'Family': 14, 'Crime fiction': 22, 'Science fiction': 17, 'Romance film': 36, 'Thriller': 17, 'Action': 20, 'Musical': 16, 'Action/Adventure': 14, 'Sports': 3 },
            { 'Year': 1962, 'Indie': 10, 'Short film': 24, 'Silent film': 0, 'Animation': 9, 'Documentary': 17, 'Comedy': 82, 'Horror': 24, 'Adventure': 25, 'Drama': 151, 'Family': 14, 'Crime fiction': 19, 'Science fiction': 16, 'Romance film': 31, 'Thriller': 27, 'Action': 20, 'Musical': 28, 'Action/Adventure': 8, 'Sports': 3 },
            { 'Year': 1963, 'Indie': 14, 'Short film': 35, 'Silent film': 4, 'Animation': 3, 'Documentary': 28, 'Comedy': 89, 'Horror': 32, 'Adventure': 18, 'Drama': 142, 'Family': 17, 'Crime fiction': 25, 'Science fiction': 10, 'Romance film': 36, 'Thriller': 27, 'Action': 14, 'Musical': 13, 'Action/Adventure': 8, 'Sports': 3 },
            { 'Year': 1964, 'Indie': 17, 'Short film': 41, 'Silent film': 1, 'Animation': 10, 'Documentary': 25, 'Comedy': 87, 'Horror': 37, 'Adventure': 18, 'Drama': 140, 'Family': 12, 'Crime fiction': 21, 'Science fiction': 19, 'Romance film': 39, 'Thriller': 32, 'Action': 21, 'Musical': 24, 'Action/Adventure': 14, 'Sports': 1 },
            { 'Year': 1965, 'Indie': 12, 'Short film': 45, 'Silent film': 3, 'Animation': 10, 'Documentary': 32, 'Comedy': 102, 'Horror': 38, 'Adventure': 32, 'Drama': 149, 'Family': 13, 'Crime fiction': 14, 'Science fiction': 24, 'Romance film': 46, 'Thriller': 29, 'Action': 27, 'Musical': 37, 'Action/Adventure': 11, 'Sports': 2 },
            { 'Year': 1966, 'Indie': 7, 'Short film': 43, 'Silent film': 3, 'Animation': 8, 'Documentary': 25, 'Comedy': 94, 'Horror': 27, 'Adventure': 17, 'Drama': 157, 'Family': 19, 'Crime fiction': 18, 'Science fiction': 21, 'Romance film': 29, 'Thriller': 27, 'Action': 29, 'Musical': 23, 'Action/Adventure': 15, 'Sports': 8 },
            { 'Year': 1967, 'Indie': 16, 'Short film': 40, 'Silent film': 1, 'Animation': 7, 'Documentary': 26, 'Comedy': 99, 'Horror': 31, 'Adventure': 21, 'Drama': 153, 'Family': 13, 'Crime fiction': 30, 'Science fiction': 22, 'Romance film': 41, 'Thriller': 32, 'Action': 40, 'Musical': 34, 'Action/Adventure': 18, 'Sports': 3 },
            { 'Year': 1968, 'Indie': 22, 'Short film': 39, 'Silent film': 1, 'Animation': 13, 'Documentary': 35, 'Comedy': 97, 'Horror': 39, 'Adventure': 16, 'Drama': 162, 'Family': 17, 'Crime fiction': 25, 'Science fiction': 17, 'Romance film': 39, 'Thriller': 35, 'Action': 33, 'Musical': 32, 'Action/Adventure': 17, 'Sports': 4 },
            { 'Year': 1969, 'Indie': 29, 'Short film': 33, 'Silent film': 0, 'Animation': 10, 'Documentary': 27, 'Comedy': 94, 'Horror': 26, 'Adventure': 20, 'Drama': 222, 'Family': 17, 'Crime fiction': 31, 'Science fiction': 15, 'Romance film': 44, 'Thriller': 43, 'Action': 47, 'Musical': 29, 'Action/Adventure': 34, 'Sports': 10 },
            { 'Year': 1970, 'Indie': 29, 'Short film': 29, 'Silent film': 0, 'Animation': 10, 'Documentary': 34, 'Comedy': 96, 'Horror': 44, 'Adventure': 22, 'Drama': 204, 'Family': 13, 'Crime fiction': 29, 'Science fiction': 8, 'Romance film': 56, 'Thriller': 35, 'Action': 43, 'Musical': 24, 'Action/Adventure': 33, 'Sports': 4 },
            { 'Year': 1971, 'Indie': 30, 'Short film': 38, 'Silent film': 0, 'Animation': 11, 'Documentary': 44, 'Comedy': 115, 'Horror': 69, 'Adventure': 20, 'Drama': 197, 'Family': 11, 'Crime fiction': 31, 'Science fiction': 14, 'Romance film': 40, 'Thriller': 54, 'Action': 52, 'Musical': 32, 'Action/Adventure': 31, 'Sports': 8 },
            { 'Year': 1972, 'Indie': 19, 'Short film': 31, 'Silent film': 0, 'Animation': 13, 'Documentary': 35, 'Comedy': 82, 'Horror': 92, 'Adventure': 20, 'Drama': 191, 'Family': 21, 'Crime fiction': 44, 'Science fiction': 19, 'Romance film': 40, 'Thriller': 57, 'Action': 62, 'Musical': 28, 'Action/Adventure': 43, 'Sports': 10 },
            { 'Year': 1973, 'Indie': 27, 'Short film': 24, 'Silent film': 0, 'Animation': 7, 'Documentary': 27, 'Comedy': 84, 'Horror': 80, 'Adventure': 14, 'Drama': 187, 'Family': 12, 'Crime fiction': 71, 'Science fiction': 22, 'Romance film': 44, 'Thriller': 76, 'Action': 69, 'Musical': 30, 'Action/Adventure': 52, 'Sports': 6 },
            { 'Year': 1974, 'Indie': 48, 'Short film': 36, 'Silent film': 0, 'Animation': 19, 'Documentary': 45, 'Comedy': 96, 'Horror': 74, 'Adventure': 24, 'Drama': 226, 'Family': 19, 'Crime fiction': 62, 'Science fiction': 18, 'Romance film': 41, 'Thriller': 69, 'Action': 74, 'Musical': 17, 'Action/Adventure': 63, 'Sports': 7 },
            { 'Year': 1975, 'Indie': 24, 'Short film': 28, 'Silent film': 0, 'Animation': 17, 'Documentary': 28, 'Comedy': 84, 'Horror': 39, 'Adventure': 17, 'Drama': 194, 'Family': 19, 'Crime fiction': 41, 'Science fiction': 15, 'Romance film': 27, 'Thriller': 47, 'Action': 50, 'Musical': 29, 'Action/Adventure': 40, 'Sports': 7 },
            { 'Year': 1976, 'Indie': 28, 'Short film': 34, 'Silent film': 1, 'Animation': 13, 'Documentary': 37, 'Comedy': 101, 'Horror': 52, 'Adventure': 12, 'Drama': 191, 'Family': 19, 'Crime fiction': 46, 'Science fiction': 12, 'Romance film': 59, 'Thriller': 57, 'Action': 68, 'Musical': 29, 'Action/Adventure': 64, 'Sports': 12 },
            { 'Year': 1977, 'Indie': 27, 'Short film': 37, 'Silent film': 1, 'Animation': 19, 'Documentary': 32, 'Comedy': 103, 'Horror': 53, 'Adventure': 30, 'Drama': 201, 'Family': 24, 'Crime fiction': 30, 'Science fiction': 29, 'Romance film': 45, 'Thriller': 59, 'Action': 48, 'Musical': 18, 'Action/Adventure': 62, 'Sports': 12 },
            { 'Year': 1978, 'Indie': 29, 'Short film': 26, 'Silent film': 0, 'Animation': 12, 'Documentary': 38, 'Comedy': 100, 'Horror': 45, 'Adventure': 24, 'Drama': 178, 'Family': 26, 'Crime fiction': 26, 'Science fiction': 25, 'Romance film': 50, 'Thriller': 61, 'Action': 51, 'Musical': 22, 'Action/Adventure': 72, 'Sports': 12 },
            { 'Year': 1979, 'Indie': 30, 'Short film': 31, 'Silent film': 0, 'Animation': 17, 'Documentary': 30, 'Comedy': 105, 'Horror': 40, 'Adventure': 27, 'Drama': 201, 'Family': 23, 'Crime fiction': 30, 'Science fiction': 24, 'Romance film': 62, 'Thriller': 42, 'Action': 44, 'Musical': 22, 'Action/Adventure': 83, 'Sports': 16 },
            { 'Year': 1980, 'Indie': 40, 'Short film': 47, 'Silent film': 0, 'Animation': 13, 'Documentary': 39, 'Comedy': 114, 'Horror': 68, 'Adventure': 23, 'Drama': 216, 'Family': 18, 'Crime fiction': 20, 'Science fiction': 29, 'Romance film': 52, 'Thriller': 50, 'Action': 42, 'Musical': 34, 'Action/Adventure': 73, 'Sports': 11 },
            { 'Year': 1981, 'Indie': 47, 'Short film': 41, 'Silent film': 0, 'Animation': 11, 'Documentary': 44, 'Comedy': 110, 'Horror': 72, 'Adventure': 27, 'Drama': 212, 'Family': 12, 'Crime fiction': 28, 'Science fiction': 23, 'Romance film': 58, 'Thriller': 59, 'Action': 38, 'Musical': 31, 'Action/Adventure': 45, 'Sports': 9 },
            { 'Year': 1982, 'Indie': 50, 'Short film': 43, 'Silent film': 0, 'Animation': 25, 'Documentary': 48, 'Comedy': 107, 'Horror': 58, 'Adventure': 31, 'Drama': 255, 'Family': 25, 'Crime fiction': 20, 'Science fiction': 34, 'Romance film': 59, 'Thriller': 51, 'Action': 44, 'Musical': 40, 'Action/Adventure': 66, 'Sports': 13 },
            { 'Year': 1983, 'Indie': 43, 'Short film': 48, 'Silent film': 0, 'Animation': 18, 'Documentary': 46, 'Comedy': 110, 'Horror': 52, 'Adventure': 32, 'Drama': 241, 'Family': 20, 'Crime fiction': 31, 'Science fiction': 42, 'Romance film': 64, 'Thriller': 57, 'Action': 47, 'Musical': 30, 'Action/Adventure': 60, 'Sports': 17 },
            { 'Year': 1984, 'Indie': 58, 'Short film': 50, 'Silent film': 0, 'Animation': 15, 'Documentary': 54, 'Comedy': 145, 'Horror': 37, 'Adventure': 44, 'Drama': 255, 'Family': 29, 'Crime fiction': 37, 'Science fiction': 33, 'Romance film': 76, 'Thriller': 62, 'Action': 56, 'Musical': 28, 'Action/Adventure': 54, 'Sports': 13 },
            { 'Year': 1985, 'Indie': 76, 'Short film': 46, 'Silent film': 0, 'Animation': 36, 'Documentary': 58, 'Comedy': 159, 'Horror': 61, 'Adventure': 49, 'Drama': 255, 'Family': 26, 'Crime fiction': 36, 'Science fiction': 38, 'Romance film': 72, 'Thriller': 66, 'Action': 78, 'Musical': 27, 'Action/Adventure': 65, 'Sports': 11 },
            { 'Year': 1986, 'Indie': 66, 'Short film': 40, 'Silent film': 1, 'Animation': 28, 'Documentary': 51, 'Comedy': 145, 'Horror': 70, 'Adventure': 51, 'Drama': 262, 'Family': 40, 'Crime fiction': 54, 'Science fiction': 44, 'Romance film': 66, 'Thriller': 67, 'Action': 84, 'Musical': 26, 'Action/Adventure': 72, 'Sports': 23 },
            { 'Year': 1987, 'Indie': 79, 'Short film': 55, 'Silent film': 0, 'Animation': 26, 'Documentary': 68, 'Comedy': 188, 'Horror': 93, 'Adventure': 35, 'Drama': 268, 'Family': 35, 'Crime fiction': 64, 'Science fiction': 47, 'Romance film': 71, 'Thriller': 106, 'Action': 116, 'Musical': 37, 'Action/Adventure': 78, 'Sports': 12 },
            { 'Year': 1988, 'Indie': 83, 'Short film': 64, 'Silent film': 1, 'Animation': 26, 'Documentary': 65, 'Comedy': 190, 'Horror': 116, 'Adventure': 44, 'Drama': 312, 'Family': 32, 'Crime fiction': 58, 'Science fiction': 41, 'Romance film': 84, 'Thriller': 105, 'Action': 84, 'Musical': 25, 'Action/Adventure': 58, 'Sports': 23 },
            { 'Year': 1989, 'Indie': 108, 'Short film': 73, 'Silent film': 1, 'Animation': 53, 'Documentary': 68, 'Comedy': 195, 'Horror': 91, 'Adventure': 35, 'Drama': 298, 'Family': 35, 'Crime fiction': 75, 'Science fiction': 67, 'Romance film': 63, 'Thriller': 104, 'Action': 116, 'Musical': 24, 'Action/Adventure': 73, 'Sports': 21 },
            { 'Year': 1990, 'Indie': 72, 'Short film': 70, 'Silent film': 0, 'Animation': 19, 'Documentary': 58, 'Comedy': 159, 'Horror': 83, 'Adventure': 31, 'Drama': 325, 'Family': 30, 'Crime fiction': 83, 'Science fiction': 43, 'Romance film': 91, 'Thriller': 116, 'Action': 80, 'Musical': 27, 'Action/Adventure': 63, 'Sports': 18 },
            { 'Year': 1991, 'Indie': 92, 'Short film': 72, 'Silent film': 0, 'Animation': 47, 'Documentary': 67, 'Comedy': 188, 'Horror': 68, 'Adventure': 28, 'Drama': 343, 'Family': 41, 'Crime fiction': 60, 'Science fiction': 50, 'Romance film': 88, 'Thriller': 112, 'Action': 95, 'Musical': 26, 'Action/Adventure': 71, 'Sports': 19 },
            { 'Year': 1992, 'Indie': 84, 'Short film': 74, 'Silent film': 0, 'Animation': 25, 'Documentary': 106, 'Comedy': 172, 'Horror': 61, 'Adventure': 35, 'Drama': 333, 'Family': 43, 'Crime fiction': 87, 'Science fiction': 34, 'Romance film': 87, 'Thriller': 131, 'Action': 98, 'Musical': 30, 'Action/Adventure': 76, 'Sports': 32 },
            { 'Year': 1993, 'Indie': 81, 'Short film': 95, 'Silent film': 0, 'Animation': 37, 'Documentary': 96, 'Comedy': 202, 'Horror': 67, 'Adventure': 50, 'Drama': 361, 'Family': 56, 'Crime fiction': 73, 'Science fiction': 57, 'Romance film': 104, 'Thriller': 159, 'Action': 107, 'Musical': 31, 'Action/Adventure': 108, 'Sports': 33 },
            { 'Year': 1994, 'Indie': 103, 'Short film': 113, 'Silent film': 1, 'Animation': 48, 'Documentary': 117, 'Comedy': 212, 'Horror': 61, 'Adventure': 57, 'Drama': 383, 'Family': 74, 'Crime fiction': 86, 'Science fiction': 43, 'Romance film': 106, 'Thriller': 152, 'Action': 105, 'Musical': 26, 'Action/Adventure': 109, 'Sports': 36 },
            { 'Year': 1995, 'Indie': 108, 'Short film': 132, 'Silent film': 0, 'Animation': 49, 'Documentary': 120, 'Comedy': 215, 'Horror': 74, 'Adventure': 60, 'Drama': 427, 'Family': 76, 'Crime fiction': 93, 'Science fiction': 54, 'Romance film': 120, 'Thriller': 157, 'Action': 112, 'Musical': 34, 'Action/Adventure': 89, 'Sports': 26 },
            { 'Year': 1996, 'Indie': 133, 'Short film': 161, 'Silent film': 0, 'Animation': 49, 'Documentary': 187, 'Comedy': 259, 'Horror': 76, 'Adventure': 55, 'Drama': 428, 'Family': 68, 'Crime fiction': 120, 'Science fiction': 71, 'Romance film': 163, 'Thriller': 190, 'Action': 129, 'Musical': 23, 'Action/Adventure': 106, 'Sports': 35 },
            { 'Year': 1997, 'Indie': 209, 'Short film': 136, 'Silent film': 2, 'Animation': 68, 'Documentary': 180, 'Comedy': 284, 'Horror': 87, 'Adventure': 72, 'Drama': 508, 'Family': 94, 'Crime fiction': 132, 'Science fiction': 66, 'Romance film': 177, 'Thriller': 209, 'Action': 139, 'Musical': 54, 'Action/Adventure': 111, 'Sports': 48 },
            { 'Year': 1998, 'Indie': 205, 'Short film': 158, 'Silent film': 0, 'Animation': 83, 'Documentary': 217, 'Comedy': 319, 'Horror': 83, 'Adventure': 61, 'Drama': 536, 'Family': 82, 'Crime fiction': 114, 'Science fiction': 70, 'Romance film': 173, 'Thriller': 221, 'Action': 141, 'Musical': 35, 'Action/Adventure': 120, 'Sports': 73 },
            { 'Year': 1999, 'Indie': 240, 'Short film': 173, 'Silent film': 3, 'Animation': 104, 'Documentary': 301, 'Comedy': 396, 'Horror': 95, 'Adventure': 86, 'Drama': 580, 'Family': 113, 'Crime fiction': 126, 'Science fiction': 78, 'Romance film': 237, 'Thriller': 237, 'Action': 152, 'Musical': 47, 'Action/Adventure': 107, 'Sports': 66 },
            { 'Year': 2000, 'Indie': 287, 'Short film': 300, 'Silent film': 2, 'Animation': 118, 'Documentary': 346, 'Comedy': 417, 'Horror': 150, 'Adventure': 60, 'Drama': 653, 'Family': 120, 'Crime fiction': 155, 'Science fiction': 75, 'Romance film': 264, 'Thriller': 281, 'Action': 169, 'Musical': 53, 'Action/Adventure': 121, 'Sports': 103 },
            { 'Year': 2001, 'Indie': 277, 'Short film': 237, 'Silent film': 3, 'Animation': 91, 'Documentary': 365, 'Comedy': 467, 'Horror': 149, 'Adventure': 77, 'Drama': 732, 'Family': 101, 'Crime fiction': 177, 'Science fiction': 81, 'Romance film': 279, 'Thriller': 271, 'Action': 218, 'Musical': 61, 'Action/Adventure': 180, 'Sports': 150 },
            { 'Year': 2002, 'Indie': 253, 'Short film': 324, 'Silent film': 6, 'Animation': 138, 'Documentary': 435, 'Comedy': 543, 'Horror': 190, 'Adventure': 82, 'Drama': 850, 'Family': 130, 'Crime fiction': 179, 'Science fiction': 95, 'Romance film': 316, 'Thriller': 322, 'Action': 230, 'Musical': 79, 'Action/Adventure': 193, 'Sports': 200 },
            { 'Year': 2003, 'Indie': 289, 'Short film': 466, 'Silent film': 5, 'Animation': 175, 'Documentary': 552, 'Comedy': 593, 'Horror': 212, 'Adventure': 104, 'Drama': 864, 'Family': 198, 'Crime fiction': 195, 'Science fiction': 89, 'Romance film': 327, 'Thriller': 322, 'Action': 223, 'Musical': 94, 'Action/Adventure': 219, 'Sports': 300 },
            { 'Year': 2004, 'Indie': 355, 'Short film': 576, 'Silent film': 2, 'Animation': 231, 'Documentary': 795, 'Comedy': 639, 'Horror': 315, 'Adventure': 99, 'Drama': 998, 'Family': 187, 'Crime fiction': 172, 'Science fiction': 123, 'Romance film': 327, 'Thriller': 346, 'Action': 269, 'Musical': 106, 'Action/Adventure': 263, 'Sports': 515 },
            { 'Year': 2005, 'Indie': 453, 'Short film': 514, 'Silent film': 3, 'Animation': 194, 'Documentary': 837, 'Comedy': 686, 'Horror': 389, 'Adventure': 106, 'Drama': 1042, 'Family': 187, 'Crime fiction': 171, 'Science fiction': 130, 'Romance film': 405, 'Thriller': 350, 'Action': 226, 'Musical': 145, 'Action/Adventure': 190, 'Sports': 629 },
            { 'Year': 2006, 'Indie': 579, 'Short film': 516, 'Silent film': 1, 'Animation': 181, 'Documentary': 952, 'Comedy': 765, 'Horror': 447, 'Adventure': 93, 'Drama': 1117, 'Family': 172, 'Crime fiction': 178, 'Science fiction': 108, 'Romance film': 389, 'Thriller': 384, 'Action': 237, 'Musical': 157, 'Action/Adventure': 182, 'Sports': 550 },
            { 'Year': 2007, 'Indie': 582, 'Short film': 403, 'Silent film': 6, 'Animation': 175, 'Documentary': 1036, 'Comedy': 660, 'Horror': 429, 'Adventure': 71, 'Drama': 982, 'Family': 127, 'Crime fiction': 188, 'Science fiction': 111, 'Romance film': 331, 'Thriller': 415, 'Action': 232, 'Musical': 163, 'Action/Adventure': 168, 'Sports': 390 },
            { 'Year': 2008, 'Indie': 533, 'Short film': 404, 'Silent film': 4, 'Animation': 156, 'Documentary': 1076, 'Comedy': 729, 'Horror': 342, 'Adventure': 94, 'Drama': 1034, 'Family': 129, 'Crime fiction': 177, 'Science fiction': 110, 'Romance film': 318, 'Thriller': 443, 'Action': 241, 'Musical': 185, 'Action/Adventure': 192, 'Sports': 382 },
            { 'Year': 2009, 'Indie': 460, 'Short film': 765, 'Silent film': 2, 'Animation': 188, 'Documentary': 847, 'Comedy': 682, 'Horror': 332, 'Adventure': 94, 'Drama': 1143, 'Family': 135, 'Crime fiction': 151, 'Science fiction': 128, 'Romance film': 312, 'Thriller': 432, 'Action': 207, 'Musical': 93, 'Action/Adventure': 139, 'Sports': 171 },
            { 'Year': 2010, 'Indie': 230, 'Short film': 451, 'Silent film': 2, 'Animation': 109, 'Documentary': 478, 'Comedy': 449, 'Horror': 148, 'Adventure': 69, 'Drama': 780, 'Family': 83, 'Crime fiction': 90, 'Science fiction': 75, 'Romance film': 223, 'Thriller': 264, 'Action': 144, 'Musical': 41, 'Action/Adventure': 83, 'Sports': 67 }
            ];

            genreList = ['Indie', 'Short film', 'Silent film', 'Animation', 'Documentary', 'Comedy', 'Horror', 'Adventure', 'Drama', 'Family', 'Crime fiction', 'Science fiction', 'Romance film', 'Thriller', 'Action', 'Musical', 'Action/Adventure', 'Sports'];
            localizedGenres = ['インディーズ', 'ショート フィルム', '無声映画', 'アニメーション', 'ドキュメンタリー', 'コメディ', 'ホラー', 'アドベンチャー', 'ドラマ', '家族', '犯罪フィクション', 'サイエンス フィクション', '恋愛', 'スリラー', 'アクション', 'ミュージカル', 'アクション/アドベンチャー', 'スポーツ'];

            getYear = function (year) {
                var index = 0, yearData = null, ret = [];

                index = year - 1888;
                yearData = moviesOverTime[index];

                for (var i = 0; i < genreList.length; i++) {
                    ret[i] = { Genre: localizedGenres[i], Count: yearData[genreList[i]] };
                }

                return ret;
            };
            updateYearOverlay = function () {
                var chartPos = $("#chart").position();
                var x = viewport.left + viewport.width * (.5 - wind.left) / wind.width + chartPos.left;
                var y = viewport.top + viewport.height * (.5 - wind.top) / wind.height + chartPos.top;

                var textHeight = 40 / wind.width;
                var textWidth = 60 / wind.width;
                
                $("#yearContainer").css("top", y - (textHeight / 2.0));
                $("#yearContainer").css("left", x - (textWidth / 2.0));
                $("#currentYear").css("font-size", Math.round(30 / wind.width) + "px");
            };
            currData = getYear(minYear);
            dataSource = new $.ig.DataSource({ dataSource: currData });

            $("#chart").igDataChart({
                width: "600px",
                height: "500px",
                dataSource: dataSource,
                axes: [{
                    name: "angleAxis",
                    type: "categoryAngle",
                    strip: "rgba(0,0,0,.1)",
                    label: "Genre",
                    labelExtent: angleLabelExtent,
                    interval: 1
                },
                {
                    name: "radiusAxis",
                    type: "numericRadius",
                    strip: "rgba(0,0,0,.1)",
                    minimumValue: 0,
                    maximumValue: 400,
                    innerRadiusExtentScale: .2
                }],
                series: [{
                    name: "series1",
                    title: "テスト系列",
                    type: "radialPie",
                    angleAxis: "angleAxis",
                    valueAxis: "radiusAxis",
                    valueMemberPath: "Count",
                    transitionDuration: 500,
                    showTooltip: true,
                    tooltipTemplate: "tooltipTemplate",
                    thickness: 3
                }],
                horizontalZoomable: false,
                verticalZoomable: false,
                windowResponse: "immediate",
                gridAreaRectChanged: function (e, ui) {
                    viewport.top = ui.newTop;
                    viewport.left = ui.newLeft;
                    viewport.width = ui.newWidth;
                    viewport.height = ui.newHeight;
                    updateYearOverlay();
                },
                windowRectChanged: function (e, ui) {
                    wind.top = ui.newTop;
                    wind.left = ui.newLeft;
                    wind.width = ui.newWidth;
                    wind.height = ui.newHeight;
                    updateYearOverlay();
                }
            });

            $("#chart").css("font-size", "11px");
            $("#chart").igDataChart("styleUpdated");
            $("#chart").append($('<div id="yearContainer" style="position: absolute; top: 230px; left: 220px"><span style="font-size: 30px" id="currentYear"></span></div>'));

            updateYearText = function (year) {
                $("#currentYear").text(year);
            };
            
            currentYear = minYear;
            updateYearText(currentYear);

            changeYear = function (year) {
                var newData = null,
                    maxCount = 0,
                    axisName = "radiusAxis";

                newData = getYear(year);

                for (var i = 0; i < currData.length; i++) {
                    var oldItem = currData[i];
                    currData[i] = newData[i];
                    maxCount = Math.max(maxCount, currData[i].Count);
                }

                $("#chart").igDataChart("notifyClearItems", currData);
                if (!isRadial) {
                    axisName = "yAxis";
                }

                if (maxCount < 400) {
                    if (maxValue != 400) {
                        maxValue = 400;
                        $("#chart").igDataChart("option", "axes", [{ name: axisName, maximumValue: maxValue }]);
                    }
                }
                else if (maxCount < 1400) {
                    if (maxValue != 1400) {
                        maxValue = 1400;
                        $("#chart").igDataChart("option", "axes", [{ name: axisName, maximumValue: maxValue }]);
                    }
                }
                updateYearText(year);
                currentYear = year;
                $("#timeSlider").slider("option", "value", currentYear);
            };
            $("#timeSlider").slider({
                slide: function (event, ui) {
                    changeYear(ui.value);
                },
                min: minYear,
                max: maxYear,
                value: minYear
            });

            $("#play").click(function () {
                if (!playing) {
                    playing = true;
                    internvalId = window.setInterval(function () {
                        currentYear++;
                        if (currentYear > maxYear) {
                            currentYear = maxYear;
                            playing = false;
                            $("#playIcon").removeClass("ui-icon-pause");
                            $("#playIcon").addClass("ui-icon-play");
                            window.clearInterval(internvalId);
                            return;
                        }

                        changeYear(currentYear);
                        updateYearText(currentYear);
                    }, 510);
                    $("#playIcon").removeClass("ui-icon-play");
                    $("#playIcon").addClass("ui-icon-pause");
                } else {
                    playing = false;
                    $("#playIcon").removeClass("ui-icon-pause");
                    $("#playIcon").addClass("ui-icon-play");
                    window.clearInterval(internvalId);
                }
            });

            $("#changeType").click(function () {
                if (isRadial) {
                    isRadial = false;
                    $("#chart").igDataChart("option", "series", [{ name: "series1", remove: true }]);
                    $("#chart").igDataChart("option", "axes", [{ name: "angleAxis", remove: true }]);
                    $("#chart").igDataChart("option", "axes", [{ name: "radiusAxis", remove: true }]);
                    $("#chart").igDataChart("option", "axes", [{
                        name: "xAxis",
                        type: "categoryX",
                        label: "Genre",
                        interval: 1,
                        labelExtent: 115,
                        labelAngle: 90
                    },
                    {
                        name: "yAxis",
                        type: "numericY",
                        maximumValue: maxValue
                    }]);
                    $("#chart").igDataChart("option", "series", [{
                        name: "series1",
                        type: "column",
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        valueMemberPath: "Count",
                        transitionDuration: 500,
                        showTooltip: true,
                        tooltipTemplate: "tooltipTemplate",
                        thickness: 3
                    }]);
                } else {
                    isRadial = true;
                    $("#chart").igDataChart("option", "series", [{ name: "series1", remove: true }]);
                    $("#chart").igDataChart("option", "axes", [{ name: "xAxis", remove: true }]);
                    $("#chart").igDataChart("option", "axes", [{ name: "yAxis", remove: true }]);
                    $("#chart").igDataChart("option", "axes", [{
                        name: "angleAxis",
                        type: "categoryAngle",
                        strip: "rgba(0,0,0,.1)",
                        label: "Genre",
                        labelExtent: angleLabelExtent,
                        interval: 1
                    },
                    {
                        name: "radiusAxis",
                        type: "numericRadius",
                        strip: "rgba(0,0,0,.1)",
                        maximumValue: maxValue,
                        innerRadiusExtentScale: .2
                    }]);
                    $("#chart").igDataChart("option", "series", [{
                        name: "series1",
                        title: "テスト系列",
                        type: "radialPie",
                        angleAxis: "angleAxis",
                        valueAxis: "radiusAxis",
                        valueMemberPath: "Count",
                        transitionDuration: 500,
                        showTooltip: true,
                        tooltipTemplate: "tooltipTemplate",
                        thickness: 3
                    }]);
                }
            });

            $("#chart").bind("igdatachartgridarearectchanged", function (e, ui) {
                viewport.top = ui.newTop;
                viewport.left = ui.newLeft;
                viewport.width = ui.newWidth;
                viewport.height = ui.newHeight;
                updateYearOverlay();
            });

            $("#chart").bind("igdatachartwindowrectchanged", function (e, ui) {
                wind.top = ui.newTop;
                wind.left = ui.newLeft;
                wind.width = ui.newWidth;
                wind.height = ui.newHeight;
                updateYearOverlay();
            });

            $("#changeType").igButton({ labelText: $("#changeType").val() });
        });
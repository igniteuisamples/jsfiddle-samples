$(function () {
<div class='tree'>
            <ul>
                {{each ${movies} }}
                <li>
                    ${movies.name}
                    <ul>
                        <li>Genre: ${movies.genre}</li>
                        <li>Year: ${movies.year}</li>
                        <li>
                            <a>
                                <span class='ratingLabel' style='float:left'>Rating:</span>
                                <span class='rating'>${movies.rating}</span>
                            </a>
                        </li>
                        <li class='clear'>Languages: ${movies.languages}</li>
                        <li>Subtitles: ${movies.subtitles}</li>
                    </ul>
                    {{/each}}
            </ul>
        </div>
});
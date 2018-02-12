function parser(input) {

    const regexSurveyData = /(?:.*?)<svg>(.+)(?:<\/svg>)/gm;
    //get group 2

    const regexTwoCats = /<cat>(.+)<\/cat>\s*<cat>(.+)<\/cat>/gm;
    //group 1 -  search in it for valid label, group 2 - search in it for valid ratings

    const regexLabel = /<text>(?:.)*\[(.+)\](?:.)*<\/text>/gm;
    //get group 1  - valid Label 

    const regexRating = /<g><val>([0-9]|10)<\/val>(\+*[0-9+][.]*[0-9]*)<\/g>/gm;

    //group 1 - valid value, group 2 - valid count.


    let correctSurveyData = regexSurveyData.exec(input);


    if (correctSurveyData != null) {

        let twoCats = regexTwoCats.exec(correctSurveyData[1]);


        if (twoCats != null) {

            let label = regexLabel.exec(twoCats[1]);

            if (label != null && twoCats[2].match(regexRating) != null) {

                label = label[1];

                let sum = 0;
                let totalVotes = 0;

                while (match = regexRating.exec(twoCats[2])) {

                    let value = Number(match[1]);
                    let vote = Number(match[2]);

                    sum += value * vote;
                    totalVotes += vote;

                }

                let avgRating = sum / totalVotes;
                console.log(`${label}: ${precisionRound(avgRating,2)}`);

            } else {
                console.log('Invalid format');
            }
        } else {
            console.log('Invalid format');
        }


    } else {
        console.log('No survey found');
    }

    function precisionRound(number, precision) {
        var factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
    }

}

parser('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>');

parser('<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>');

parser(`<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It's great, don't mess with it!</p><p>I'd like to have the option for delivery</p>`);

parser(`<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>`);
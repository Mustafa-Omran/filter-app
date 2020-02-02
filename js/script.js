class Article {
    constructor(title, src, desc) {
        this.title = title;
        this.src = src;
        this.desc = desc;
    }
}

const app = new Vue({
    el: '#app',
    data: {
        search: '',
        withSelect: '',
        list: [],
        articleList: [
            new Article(
                'ops Investigate Murder of Dutch Model Who Died After Threesome With Bitcoin Tycoon & His Wife',
                'Sputniknews',
                `Previously, a coroner ruled that there was no foul play in the model’s death, despite admitting the possibility
        of a struggle due to the presence of the millionaire’s DNA under her nails and the trauma on the back of her
        head.`
            ),
            new Article(
                'What the Fed Reserve’s Balance Sheet Expansion Means for Bitcoin',
                'Coindesk',
                `The U.S. Federal Reserve is again expanding its balance sheet – prominent experts believe that could bode well
        for bitcoin in the long run.`
            ),
            new Article(
                'Legendary Bitcoin contributor Hal Finney’s Twitter profile is safe — for now',
                'The Next Web',
                `Bitcoin fans can rest easy as Twitter has backpedalled on its plans to purge inactive accounts until it can
        figure out how to memorialize them. We’ve heard you on the impact that this would have on the accounts of the
        deceased. This was a miss on our part.`
            ),
            new Article(
                'NARRATIVE MANAGERS FACEPLANT IN HILARIOUS OPCW SCANDAL SPIN JOB',
                'Coindesk',
                `Syria has been the target of what may be the most sophisticated propaganda campaign in history, and Bellingcat
        has been consistently rallying behind even the most transparently ridiculous tools of this campaign.`
            ),
            new Article(
                'EToro: Facebook Should Drop Libra and Support Third-Party Stablecoins',
                'Sputniknews',
                `Facebook needs to change strategy and focus on the Calibra wallet — not Libra — to assure success, say eToro’s
        blockchain researchers`
            ),
            new Article(
                'Bitcoin Cash Could Go Up 1000x, Roger Ver Says',
                'Coindesk',
                `Former Bitcoin.com CEO, Roger Ver, was shilling Bitcoin Cash on CNBC’s Power Lunch yesterday. During the
        interview, Ver maintained his position that BCH “is the real Bitcoin”, and suggested that it could go up in
        price by 1000 times the current value.`
            ),
        ],
    },
    computed: {
        filteredList() {
            return this.articleList.filter(article => {
                return article.title.toLowerCase().includes(this.search.toLowerCase())
            });
        }
    },
    methods: {
        onChange(event) {
            this.list = this.articleList.filter(article => {
                return article.src.includes(event.target.value);
            });

            return this.list;
        }
    }
})
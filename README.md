# MEAN-Dictionary
Simple MEAN Stack app intended to be a **multilanguage** dictionary and thesaurus

To start using `git clone` and run `npm install`

# TO-DO
## Sections

* Sidebar `collapse-panel`
  * Search a word
    * Word `input`
    * Word type `select`
    * Search in Language `select`
      * Load languages from `languages collection`
    * Translate to Language `select`
      * Load languages from `languages collection`
  * Add a word
    * Word `input`
    * Word type `select`
        * Load options from `types collection`
    * Synonyms `input`
        * Auto-complete with options from selected language `words collection`
    * Antonyms `input`
        * Auto-complete with options from selected language `words collection`
    * Meaning `textarea`
    * Language `select`
        * Load options from `languages collection`
  * Add a language
    * Language `input`
    * Variation from other language? `select`
      * Load options from `languages collection`
* Main content
  * Left panel
    * Word search results `ul`
      * Word result `li(data-id="word_id")`
  * Right panel
    * Word meaning after selecting from search results

---
Follow our live stream on [Livecoding Memolition channel](https://www.livecoding.tv/memolition/)

Join the conversation at [#MEAN-Dictionary](https://twitter.com/hashtag/MEAN-Dictionary)
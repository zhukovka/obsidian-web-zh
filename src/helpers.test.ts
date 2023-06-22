import {extractTags} from "./utils";

describe('helper', () => {
    it('should work', () => {
        const keywords = "how to list on etsy step by step, etsy print on demand tutorial, print on demand 2023, print on demand, printify tutorial, canva tutorial, etsy seo, etsy listing tutorial, etsy and printify, how to connect etsy to printify, etsy and print on demand, how to sell on etsy, selling on etsy, create a product in printify, canva and print on demand, printify step by step, etsy printify tutorial, how to list an item on etsy, how to create a printify listing, etsy shop for beginners";
        const words = extractTags(keywords);
        expect(words).toEqual('#etsy, #print, #demand, #tutorial, #2023, #printify, #canva, #seo, #listing, #connect, #sell, #selling, #create, #product, #item, #shop, #beginners');
    });
});
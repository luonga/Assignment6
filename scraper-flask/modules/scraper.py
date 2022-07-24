import requests
from bs4 import BeautifulSoup
import json
def scraper(URL): 
    page = requests.get(URL)

    soup = BeautifulSoup(page.content, "html.parser")

    ingredients = soup.find_all("span", class_="o-Ingredients__a-Ingredient--CheckboxLabel")

    #Delete the "Deselect all" on the checklist
    del(ingredients[0])
    final = []
    for ingredient in ingredients:
        final.append(ingredient.text.strip())
    final = json.dumps(final)
    return final


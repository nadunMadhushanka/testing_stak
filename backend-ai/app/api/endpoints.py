from fastapi import APIRouter
from app.shemas.products import productInput, productOutput
from app.shemas.books import booksInput, booksOutput
from app.services.enricher import generate_product_metadata
from app.services.enhancer import generate_enhanced_book_metadata

router = APIRouter()

@router.post("/enrich", response_model = productOutput)
async def enrich_product(product: productInput):
    data = generate_product_metadata(product.name, product.category)
    return productOutput(description=data["description"], tags=data["tags"])


@router.post("/enhance", response_model=booksOutput)
async def enhance_text(bookname: booksInput):
    data = generate_enhanced_book_metadata(bookname.name)
    return booksOutput(enhanced_text=data["enhanced_text"])
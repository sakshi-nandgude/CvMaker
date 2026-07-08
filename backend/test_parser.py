from pprint import pprint

from app.importer.cv_importer import build_master_profile

profile = build_master_profile(
    "A_MASTER_CV.docx"
)

pprint(profile["profile"])

print()

print(profile["skills"][:10])
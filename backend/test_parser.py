from app.importer.cv_parser import parse_cv

data = parse_cv("A_MASTER_CV.docx")

print(data.keys())

print("\n====================\n")

print(data["PROFILE SUMMARY"])

print("\n====================\n")

print(data["PROFESSIONAL EXPERIENCE"][:1000])
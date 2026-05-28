 function checkEligibility() {
      const selected = document.querySelector('input[name="education"]:checked');

      if (!selected) {
        document.getElementById("result").innerHTML = "Please select an option!";
        return;
      }

      let result;

      switch (selected.value) {
        case "HighSchool":
        case "UG":
          result = "✅ Eligible for Job";
          break;

        case "Illiterate":
        case "PG":
        case "Doctorate":
          result = "❌ Not Eligible for Job";
          break;

        default:
          result = "Invalid Selection";
      }

      document.getElementById("result").innerHTML = result;
    }
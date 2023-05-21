const isMale = true;
const age = 33;
const fullName = "Julius A Adebowale";

const favoriteSport = [
  5,
  { isFootball: true, wrestling: "fake", femaleBasketBall: "fake" },
  "boxing",
  "ufc",
  [0, 1, 2, 3, 4, 5, 6],
];

const bioData = {
  bloodGroup: "o+",
  weight: 68,
  isPregnant: false,
};

function alertUser(event) {
  event.preventDefault();
  Swal.fire({
    title: "Submit your Github username",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Look up",
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
      return fetch(`//api.github.com/users/${login}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .catch((error) => {
          Swal.showValidationMessage(`Request failed: ${error}`);
        });
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `${result.value.login}'s avatar`,
        imageUrl: result.value.avatar_url,
      });
    }
  });
  console.log(
    typeof isMale,
    typeof age,
    typeof fullName,
    typeof favoriteSport,
    typeof bioData
  );
}

console.log(favoriteSport[3]);
console.log(bioData.weight);

let nums = [1, 2, 3];
nums[0] = 10;
nums[1] = 22;
console.log(nums);

# -*- coding: utf-8 -*-

"""Akvo RSR is covered by the GNU Affero General Public License.
See more details in the license.txt file located at the root folder of the
Akvo RSR module. For additional details on the GNU license please
see < http://www.gnu.org/licenses/agpl.html >.
"""

from django.utils.translation import ugettext_lazy as _

M49_CODES = (
    (
        "",
        _("World")
    ),
    (
        "2",
        _("%sAfrica") % (4 * " ")
    ),
    (
        "14",
        _("%sEastern Africa") % (8 * " ")
    ),
    (
        "108",
        _("%sBurundi") % (12 * " ")
    ),
    (
        "174",
        _("%sComoros") % (12 * " ")
    ),
    (
        "262",
        _("%sDjibouti") % (12 * " ")
    ),
    (
        "232",
        _("%sEritrea") % (12 * " ")
    ),
    (
        "231",
        _("%sEthiopia") % (12 * " ")
    ),
    (
        "404",
        _("%sKenya") % (12 * " ")
    ),
    (
        "450",
        _("%sMadagascar") % (12 * " ")
    ),
    (
        "454",
        _("%sMalawi") % (12 * " ")
    ),
    (
        "480",
        _("%sMauritius") % (12 * " ")
    ),
    (
        "175",
        _("%sMayotte") % (12 * " ")
    ),
    (
        "508",
        _("%sMozambique") % (12 * " ")
    ),
    (
        "638",
        _("%sRéunion") % (12 * " ")
    ),
    (
        "646",
        _("%sRwanda") % (12 * " ")
    ),
    (
        "690",
        _("%sSeychelles") % (12 * " ")
    ),
    (
        "706",
        _("%sSomalia") % (12 * " ")
    ),
    (
        "728",
        _("%sSouth Sudan") % (12 * " ")
    ),
    (
        "800",
        _("%sUganda") % (12 * " ")
    ),
    (
        "834",
        _("%sUnited Republic of Tanzania") % (12 * " ")
    ),
    (
        "894",
        _("%sZambia") % (12 * " ")
    ),
    (
        "716",
        _("%sZimbabwe") % (12 * " ")
    ),
    (
        "17",
        _("%sMiddle Africa") % (8 * " ")
    ),
    (
        "24",
        _("%sAngola") % (12 * " ")
    ),
    (
        "120",
        _("%sCameroon") % (12 * " ")
    ),
    (
        "140",
        _("%sCentral African Republic") % (12 * " ")
    ),
    (
        "148",
        _("%sChad") % (12 * " ")
    ),
    (
        "178",
        _("%sCongo") % (12 * " ")
    ),
    (
        "180",
        _("%sDemocratic Republic of the Congo") % (12 * " ")
    ),
    (
        "226",
        _("%sEquatorial Guinea") % (12 * " ")
    ),
    (
        "266",
        _("%sGabon") % (12 * " ")
    ),
    (
        "678",
        _("%sSao Tome and Principe") % (12 * " ")
    ),
    (
        "15",
        _("%sNorthern Africa") % (8 * " ")
    ),
    (
        "12",
        _("%sAlgeria") % (12 * " ")
    ),
    (
        "818",
        _("%sEgypt") % (12 * " ")
    ),
    (
        "434",
        _("%sLibya") % (12 * " ")
    ),
    (
        "504",
        _("%sMorocco") % (12 * " ")
    ),
    (
        "729",
        _("%sSudan") % (12 * " ")
    ),
    (
        "788",
        _("%sTunisia") % (12 * " ")
    ),
    (
        "732",
        _("%sWestern Sahara") % (12 * " ")
    ),
    (
        "18",
        _("%sSouthern Africa") % (12 * " ")
    ),
    (
        "72",
        _("%sBotswana") % (12 * " ")
    ),
    (
        "426",
        _("%sLesotho") % (12 * " ")
    ),
    (
        "516",
        _("%sNamibia") % (12 * " ")
    ),
    (
        "710",
        _("%sSouth Africa") % (12 * " ")
    ),
    (
        "748",
        _("%sSwaziland") % (12 * " ")
    ),
    (
        "11",
        _("%sWestern Africa") % (12 * " ")
    ),
    (
        "204",
        _("%sBenin") % (12 * " ")
    ),
    (
        "854",
        _("%sBurkina Faso") % (12 * " ")
    ),
    (
        "132",
        _("%sCabo Verde") % (12 * " ")
    ),
    (
        "384",
        _("%sCote d'Ivoire") % (12 * " ")
    ),
    (
        "270",
        _("%sGambia") % (12 * " ")
    ),
    (
        "288",
        _("%sGhana") % (12 * " ")
    ),
    (
        "324",
        _("%sGuinea") % (12 * " ")
    ),
    (
        "624",
        _("%sGuinea-Bissau") % (12 * " ")
    ),
    (
        "430",
        _("%sLiberia") % (12 * " ")
    ),
    (
        "466",
        _("%sMali") % (12 * " ")
    ),
    (
        "478",
        _("%sMauritania") % (12 * " ")
    ),
    (
        "562",
        _("%sNiger") % (12 * " ")
    ),
    (
        "566",
        _("%sNigeria") % (12 * " ")
    ),
    (
        "654",
        _("%sSaint Helena") % (12 * " ")
    ),
    (
        "686",
        _("%sSenegal") % (12 * " ")
    ),
    (
        "694",
        _("%sSierra Leone") % (12 * " ")
    ),
    (
        "768",
        _("%sTogo") % (12 * " ")
    ),
    (
        "19",
        _("%sAmericas") % (4 * " ")
    ),
    (
        "419",
        _("%sLatin America and the Caribbean") % (8 * " ")
    ),
    (
        "29",
        _("%sCaribbean") % (12 * " ")
    ),
    (
        "660",
        _("%sAnguilla") % (16 * " ")
    ),
    (
        "28",
        _("%sAntigua and Barbuda") % (16 * " ")
    ),
    (
        "533",
        _("%sAruba") % (16 * " ")
    ),
    (
        "44",
        _("%sBahamas") % (16 * " ")
    ),
    (
        "52",
        _("%sBarbados") % (16 * " ")
    ),
    (
        "535",
        _("%sBonaire, Sint Eustatius and Saba") % (16 * " ")
    ),
    (
        "92",
        _("%sBritish Virgin Islands") % (16 * " ")
    ),
    (
        "136",
        _("%sCayman Islands") % (16 * " ")
    ),
    (
        "192",
        _("%sCuba") % (16 * " ")
    ),
    (
        "531",
        _("%sCuraçao") % (16 * " ")
    ),
    (
        "212",
        _("%sDominica") % (16 * " ")
    ),
    (
        "214",
        _("%sDominican Republic") % (16 * " ")
    ),
    (
        "308",
        _("%sGrenada") % (16 * " ")
    ),
    (
        "312",
        _("%sGuadeloupe") % (16 * " ")
    ),
    (
        "332",
        _("%sHaiti") % (16 * " ")
    ),
    (
        "388",
        _("%sJamaica") % (16 * " ")
    ),
    (
        "474",
        _("%sMartinique") % (16 * " ")
    ),
    (
        "500",
        _("%sMontserrat") % (16 * " ")
    ),
    (
        "630",
        _("%sPuerto Rico") % (16 * " ")
    ),
    (
        "652",
        _("%sSaint-Barthélemy") % (16 * " ")
    ),
    (
        "659",
        _("%sSaint Kitts and Nevis") % (16 * " ")
    ),
    (
        "662",
        _("%sSaint Lucia") % (16 * " ")
    ),
    (
        "663",
        _("%sSaint Martin (French part)") % (16 * " ")
    ),
    (
        "670",
        _("%sSaint Vincent and the Grenadines") % (16 * " ")
    ),
    (
        "534",
        _("%sSint Maarten (Dutch part)") % (16 * " ")
    ),
    (
        "780",
        _("%sTrinidad and Tobago") % (16 * " ")
    ),
    (
        "796",
        _("%sTurks and Caicos Islands") % (16 * " ")
    ),
    (
        "850",
        _("%sUnited States Virgin Islands") % (16 * " ")
    ),
    (
        "13",
        _("%sCentral America") % (12 * " ")
    ),
    (
        "84",
        _("%sBelize") % (16 * " ")
    ),
    (
        "188",
        _("%sCosta Rica") % (16 * " ")
    ),
    (
        "222",
        _("%sEl Salvador") % (16 * " ")
    ),
    (
        "320",
        _("%sGuatemala") % (16 * " ")
    ),
    (
        "340",
        _("%sHonduras") % (16 * " ")
    ),
    (
        "484",
        _("%sMexico") % (16 * " ")
    ),
    (
        "558",
        _("%sNicaragua") % (16 * " ")
    ),
    (
        "591",
        _("%sPanama") % (16 * " ")
    ),
    (
        "5",
        _("%sSouth America") % (12 * " ")
    ),
    (
        "32",
        _("%sArgentina") % (16 * " ")
    ),
    (
        "68",
        _("%sBolivia (Plurinational State of)") % (16 * " ")
    ),
    (
        "76",
        _("%sBrazil") % (16 * " ")
    ),
    (
        "152",
        _("%sChile") % (16 * " ")
    ),
    (
        "170",
        _("%sColombia") % (16 * " ")
    ),
    (
        "218",
        _("%sEcuador") % (16 * " ")
    ),
    (
        "238",
        _("%sFalkland Islands (Malvinas)") % (16 * " ")
    ),
    (
        "254",
        _("%sFrench Guiana") % (16 * " ")
    ),
    (
        "328",
        _("%sGuyana") % (16 * " ")
    ),
    (
        "600",
        _("%sParaguay") % (16 * " ")
    ),
    (
        "604",
        _("%sPeru") % (16 * " ")
    ),
    (
        "740",
        _("%sSuriname") % (16 * " ")
    ),
    (
        "858",
        _("%sUruguay") % (16 * " ")
    ),
    (
        "862",
        _("%sVenezuela (Bolivarian Republic of)") % (16 * " ")
    ),
    (
        "21",
        _("%sNorthern America") % (8 * " ")
    ),
    (
        "60",
        _("%sBermuda") % (12 * " ")
    ),
    (
        "124",
        _("%sCanada") % (12 * " ")
    ),
    (
        "304",
        _("%sGreenland") % (12 * " ")
    ),
    (
        "666",
        _("%sSaint Pierre and Miquelon") % (12 * " ")
    ),
    (
        "840",
        _("%sUnited States of America") % (12 * " ")
    ),
    (
        "142",
        _("%sAsia") % (4 * " ")
    ),
    (
        "143",
        _("%sCentral Asia") % (8 * " ")
    ),
    (
        "398",
        _("%sKazakhstan") % (12 * " ")
    ),
    (
        "417",
        _("%sKyrgyzstan") % (12 * " ")
    ),
    (
        "762",
        _("%sTajikistan") % (12 * " ")
    ),
    (
        "795",
        _("%sTurkmenistan") % (12 * " ")
    ),
    (
        "860",
        _("%sUzbekistan") % (12 * " ")
    ),
    (
        "30",
        _("%sEastern Asia") % (8 * " ")
    ),
    (
        "156",
        _("%sChina") % (12 * " ")
    ),
    (
        "344",
        _("%sChina, Hong Kong Special Administrative Region") % (12 * " ")
    ),
    (
        "446",
        _("%sChina, Macao Special Administrative Region") % (12 * " ")
    ),
    (
        "408",
        _("%sDemocratic People's Republic of Korea") % (12 * " ")
    ),
    (
        "392",
        _("%sJapan") % (12 * " ")
    ),
    (
        "496",
        _("%sMongolia") % (12 * " ")
    ),
    (
        "410",
        _("%sRepublic of Korea") % (12 * " ")
    ),
    (
        "34",
        _("%sSouthern Asia") % (8 * " ")
    ),
    (
        "4",
        _("%sAfghanistan") % (12 * " ")
    ),
    (
        "50",
        _("%sBangladesh") % (12 * " ")
    ),
    (
        "64",
        _("%sBhutan") % (12 * " ")
    ),
    (
        "356",
        _("%sIndia") % (12 * " ")
    ),
    (
        "364",
        _("%sIran (Islamic Republic of)") % (12 * " ")
    ),
    (
        "462",
        _("%sMaldives") % (12 * " ")
    ),
    (
        "524",
        _("%sNepal") % (12 * " ")
    ),
    (
        "586",
        _("%sPakistan") % (12 * " ")
    ),
    (
        "144",
        _("%sSri Lanka") % (12 * " ")
    ),
    (
        "35",
        _("%sSouth-Eastern Asia") % (8 * " ")
    ),
    (
        "96",
        _("%sBrunei Darussalam") % (12 * " ")
    ),
    (
        "116",
        _("%sCambodia") % (12 * " ")
    ),
    (
        "360",
        _("%sIndonesia") % (12 * " ")
    ),
    (
        "418",
        _("%sLao People's Democratic Republic") % (12 * " ")
    ),
    (
        "458",
        _("%sMalaysia") % (12 * " ")
    ),
    (
        "104",
        _("%sMyanmar") % (12 * " ")
    ),
    (
        "608",
        _("%sPhilippines") % (12 * " ")
    ),
    (
        "702",
        _("%sSingapore") % (12 * " ")
    ),
    (
        "764",
        _("%sThailand") % (12 * " ")
    ),
    (
        "626",
        _("%sTimor-Leste") % (12 * " ")
    ),
    (
        "704",
        _("%sViet Nam") % (12 * " ")
    ),
    (
        "145",
        _("%sWestern Asia") % (8 * " ")
    ),
    (
        "51",
        _("%sArmenia") % (12 * " ")
    ),
    (
        "31",
        _("%sAzerbaijan") % (12 * " ")
    ),
    (
        "48",
        _("%sBahrain") % (12 * " ")
    ),
    (
        "196",
        _("%sCyprus") % (12 * " ")
    ),
    (
        "268",
        _("%sGeorgia") % (12 * " ")
    ),
    (
        "368",
        _("%sIraq") % (12 * " ")
    ),
    (
        "376",
        _("%sIsrael") % (12 * " ")
    ),
    (
        "400",
        _("%sJordan") % (12 * " ")
    ),
    (
        "414",
        _("%sKuwait") % (12 * " ")
    ),
    (
        "422",
        _("%sLebanon") % (12 * " ")
    ),
    (
        "512",
        _("%sOman") % (12 * " ")
    ),
    (
        "634",
        _("%sQatar") % (12 * " ")
    ),
    (
        "682",
        _("%sSaudi Arabia") % (12 * " ")
    ),
    (
        "275",
        _("%sState of Palestine") % (12 * " ")
    ),
    (
        "760",
        _("%sSyrian Arab Republic") % (12 * " ")
    ),
    (
        "792",
        _("%sTurkey") % (12 * " ")
    ),
    (
        "784",
        _("%sUnited Arab Emirates") % (12 * " ")
    ),
    (
        "887",
        _("%sYemen") % (12 * " ")
    ),
    (
        "150",
        _("%sEurope") % (4 * " ")
    ),
    (
        "151",
        _("%sEastern Europe") % (8 * " ")
    ),
    (
        "112",
        _("%sBelarus") % (12 * " ")
    ),
    (
        "100",
        _("%sBulgaria") % (12 * " ")
    ),
    (
        "203",
        _("%sCzech Republic") % (12 * " ")
    ),
    (
        "348",
        _("%sHungary") % (12 * " ")
    ),
    (
        "616",
        _("%sPoland") % (12 * " ")
    ),
    (
        "498",
        _("%sRepublic of Moldova") % (12 * " ")
    ),
    (
        "642",
        _("%sRomania") % (12 * " ")
    ),
    (
        "643",
        _("%sRussian Federation") % (12 * " ")
    ),
    (
        "703",
        _("%sSlovakia") % (12 * " ")
    ),
    (
        "804",
        _("%sUkraine") % (12 * " ")
    ),
    (
        "154",
        _("%sNorthern Europe") % (8 * " ")
    ),
    (
        "248",
        _("%sÅland Islands") % (12 * " ")
    ),
    (
        "208",
        _("%sDenmark") % (12 * " ")
    ),
    (
        "233",
        _("%sEstonia") % (12 * " ")
    ),
    (
        "234",
        _("%sFaeroe Islands") % (12 * " ")
    ),
    (
        "246",
        _("%sFinland") % (12 * " ")
    ),
    (
        "831",
        _("%sGuernsey") % (12 * " ")
    ),
    (
        "352",
        _("%sIceland") % (12 * " ")
    ),
    (
        "372",
        _("%sIreland") % (12 * " ")
    ),
    (
        "833",
        _("%sIsle of Man") % (12 * " ")
    ),
    (
        "832",
        _("%sJersey") % (12 * " ")
    ),
    (
        "428",
        _("%sLatvia") % (12 * " ")
    ),
    (
        "440",
        _("%sLithuania") % (12 * " ")
    ),
    (
        "578",
        _("%sNorway") % (12 * " ")
    ),
    (
        "744",
        _("%sSvalbard and Jan Mayen Islands") % (12 * " ")
    ),
    (
        "752",
        _("%sSweden") % (12 * " ")
    ),
    (
        "826",
        _("%sUnited Kingdom of Great Britain and Northern Ireland") % (12 * " ")
    ),
    (
        "39",
        _("%sSouthern Europe") % (8 * " ")
    ),
    (
        "8",
        _("%sAlbania") % (12 * " ")
    ),
    (
        "20",
        _("%sAndorra") % (12 * " ")
    ),
    (
        "70",
        _("%sBosnia and Herzegovina") % (12 * " ")
    ),
    (
        "191",
        _("%sCroatia") % (12 * " ")
    ),
    (
        "292",
        _("%sGibraltar") % (12 * " ")
    ),
    (
        "300",
        _("%sGreece") % (12 * " ")
    ),
    (
        "336",
        _("%sHoly See") % (12 * " ")
    ),
    (
        "380",
        _("%sItaly") % (12 * " ")
    ),
    (
        "470",
        _("%sMalta") % (12 * " ")
    ),
    (
        "499",
        _("%sMontenegro") % (12 * " ")
    ),
    (
        "620",
        _("%sPortugal") % (12 * " ")
    ),
    (
        "674",
        _("%sSan Marino") % (12 * " ")
    ),
    (
        "688",
        _("%sSerbia") % (12 * " ")
    ),
    (
        "705",
        _("%sSlovenia") % (12 * " ")
    ),
    (
        "724",
        _("%sSpain") % (12 * " ")
    ),
    (
        "807",
        _("%sThe former Yugoslav Republic of Macedonia") % (12 * " ")
    ),
    (
        "155",
        _("%sWestern Europe") % (8 * " ")
    ),
    (
        "40",
        _("%sAustria") % (12 * " ")
    ),
    (
        "56",
        _("%sBelgium") % (12 * " ")
    ),
    (
        "250",
        _("%sFrance") % (12 * " ")
    ),
    (
        "276",
        _("%sGermany") % (12 * " ")
    ),
    (
        "438",
        _("%sLiechtenstein") % (12 * " ")
    ),
    (
        "442",
        _("%sLuxembourg") % (12 * " ")
    ),
    (
        "492",
        _("%sMonaco") % (12 * " ")
    ),
    (
        "528",
        _("%sNetherlands") % (12 * " ")
    ),
    (
        "756",
        _("%sSwitzerland") % (12 * " ")
    ),
    (
        "9",
        _("%sOceania") % (4 * " ")
    ),
    (
        "53",
        _("%sAustralia and New Zealand") % (8 * " ")
    ),
    (
        "36",
        _("%sAustralia") % (12 * " ")
    ),
    (
        "554",
        _("%sNew Zealand") % (12 * " ")
    ),
    (
        "574",
        _("%sNorfolk Island") % (12 * " ")
    ),
    (
        "54",
        _("%sMelanesia") % (8 * " ")
    ),
    (
        "242",
        _("%sFiji") % (12 * " ")
    ),
    (
        "540",
        _("%sNew Caledonia") % (12 * " ")
    ),
    (
        "598",
        _("%sPapua New Guinea") % (12 * " ")
    ),
    (
        "90",
        _("%sSolomon Islands") % (12 * " ")
    ),
    (
        "548",
        _("%sVanuatu") % (12 * " ")
    ),
    (
        "57",
        _("%sMicronesia") % (8 * " ")
    ),
    (
        "316",
        _("%sGuam") % (12 * " ")
    ),
    (
        "296",
        _("%sKiribati") % (12 * " ")
    ),
    (
        "584",
        _("%sMarshall Islands") % (12 * " ")
    ),
    (
        "583",
        _("%sMicronesia (Federated States of)") % (12 * " ")
    ),
    (
        "520",
        _("%sNauru") % (12 * " ")
    ),
    (
        "580",
        _("%sNorthern Mariana Islands") % (12 * " ")
    ),
    (
        "585",
        _("%sPalau") % (12 * " ")
    ),
    (
        "61",
        _("%sPolynesia") % (8 * " ")
    ),
    (
        "16",
        _("%sAmerican Samoa") % (12 * " ")
    ),
    (
        "184",
        _("%sCook Islands") % (12 * " ")
    ),
    (
        "258",
        _("%sFrench Polynesia") % (12 * " ")
    ),
    (
        "570",
        _("%sNiue") % (12 * " ")
    ),
    (
        "612",
        _("%sPitcairn") % (12 * " ")
    ),
    (
        "882",
        _("%sSamoa") % (12 * " ")
    ),
    (
        "772",
        _("%sTokelau") % (12 * " ")
    ),
    (
        "776",
        _("%sTonga") % (12 * " ")
    ),
    (
        "798",
        _("%sTuvalu") % (12 * " ")
    ),
    (
        "876",
        _("%sWallis and Futuna Islands") % (12 * " ")
    ),
)


# Dictionary of M.49 Alpha country and region codes
# Based on http://unstats.un.org/unsd/methods/m49/m49regin.htm

M49_HIERARCHY = {
    1: [2, 19, 142, 150, 9],
    2: [14, 17, 15, 18, 11],
    3: [21, 29, 13],
    4: ["AF", ],
    5: [32, 68, 76, 152, 170, 218, 238, 254, 328, 600, 604, 740, 858, 862],
    8: ["AL", ],
    9: [53, 54, 57, 61],
    11: [204, 854, 132, 384, 270, 288, 324, 624, 430, 466, 478, 562, 566, 654, 686, 694, 768],
    12: ["DZ", ],
    13: [84, 188, 222, 320, 340, 484, 558, 591],
    14: [108, 174, 262, 232, 231, 404, 450, 454, 480, 175, 508, 638, 646, 690, 706, 728, 800, 834, 894, 716],
    15: [12, 818, 434, 504, 729, 788, 732],
    16: ["AS", ],
    17: [24, 120, 140, 148, 178, 180, 226, 266, 678],
    18: [72, 426, 516, 710, 748],
    19: [419, 21],
    20: ["AD", ],
    21: [60, 124, 304, 666, 840],
    24: ["AO", ],
    28: ["AG", ],
    29: [660, 28, 533, 44, 52, 535, 92, 136, 192, 531, 212, 214, 308, 312, 332, 388, 474, 500, 630, 652, 659, 662, 663,
         670, 534, 780, 796, 850],
    30: [156, 344, 446, 408, 392, 496, 410],
    31: ["AZ", ],
    32: ["AR", ],
    34: [4, 50, 64, 356, 364, 462, 524, 586, 144],
    35: [96, 116, 360, 418, 458, 104, 608, 702, 764, 626, 704],
    36: ["AU", ],
    39: [8, 20, 70, 191, 292, 300, 336, 380, 470, 499, 620, 674, 688, 705, 724, 807],
    40: ["AT", ],
    44: ["BS", ],
    48: ["BH", ],
    50: ["BD", ],
    51: ["AM", ],
    52: ["BB", ],
    53: [36, 554, 574],
    54: [242, 540, 598, 90, 548],
    56: ["BE", ],
    57: [316, 296, 584, 583, 520, 580, 585],
    60: ["BM", ],
    61: [16, 184, 258, 570, 612, 882, 772, 776, 798, 876],
    64: ["BT", ],
    68: ["BO", ],
    70: ["BA", ],
    72: ["BW", ],
    76: ["BR", ],
    84: ["BZ", ],
    90: ["SB", ],
    92: ["VG", ],
    96: ["BN", ],
    100: ["BG", ],
    104: ["MM", ],
    108: ["BI", ],
    112: ["BY", ],
    116: ["KH", ],
    120: ["CM", ],
    124: ["CA", ],
    132: ["CV", ],
    136: ["KY", ],
    140: ["CF", ],
    142: [143, 30, 34, 35, 145],
    143: [398, 417, 762, 795, 860],
    144: ["LK", ],
    145: [51, 31, 48, 196, 268, 368, 376, 400, 414, 422, 512, 634, 682, 275, 760, 792, 784, 887],
    148: ["TD", ],
    150: [151, 154, 39, 155],
    151: [112, 100, 203, 348, 616, 498, 642, 643, 703, 804],
    152: ["CL", ],
    154: [248, 208, 233, 234, 246, 831, 352, 372, 833, 832, 428, 440, 578, 744, 752, 826],
    155: [40, 56, 250, 276, 438, 442, 492, 528, 756],
    156: ["CN", ],
    170: ["CO", ],
    174: ["KM", ],
    175: ["YT", ],
    178: ["CG", ],
    180: ["CD", ],
    184: ["CK", ],
    188: ["CR", ],
    191: ["HR", ],
    192: ["CU", ],
    196: ["CY", ],
    203: ["CZ", ],
    204: ["BJ", ],
    208: ["DK", ],
    212: ["DM", ],
    214: ["DO", ],
    218: ["EC", ],
    222: ["SV", ],
    226: ["GQ", ],
    231: ["ET", ],
    232: ["ER", ],
    233: ["EE", ],
    234: ["FO", ],
    238: ["FK", ],
    242: ["FJ", ],
    246: ["FI", ],
    248: ["AX", ],
    250: ["FR", ],
    254: ["GF", ],
    258: ["PF", ],
    262: ["DJ", ],
    266: ["GA", ],
    268: ["GE", ],
    270: ["GM", ],
    275: ["PS", ],
    276: ["DE", ],
    288: ["GH", ],
    292: ["GI", ],
    296: ["KI", ],
    300: ["GR", ],
    304: ["GL", ],
    308: ["GD", ],
    312: ["GP", ],
    316: ["GU", ],
    320: ["GT", ],
    324: ["GN", ],
    328: ["GY", ],
    332: ["HT", ],
    336: ["VA", ],
    340: ["HN", ],
    344: ["HK", ],
    348: ["HU", ],
    352: ["IS", ],
    356: ["IN", ],
    360: ["ID", ],
    364: ["IR", ],
    368: ["IQ", ],
    372: ["IE", ],
    376: ["IL", ],
    380: ["IT", ],
    384: ["CI", ],
    388: ["JM", ],
    392: ["JP", ],
    398: ["KZ", ],
    400: ["JO", ],
    404: ["KE", ],
    408: ["KP", ],
    410: ["KR", ],
    414: ["KW", ],
    417: ["KG", ],
    418: ["LA", ],
    419: [29, 13, 5],
    422: ["LB", ],
    426: ["LS", ],
    428: ["LV", ],
    430: ["LR", ],
    434: ["LY", ],
    438: ["LI", ],
    440: ["LT", ],
    442: ["LU", ],
    446: ["MO", ],
    450: ["MG", ],
    454: ["MW", ],
    458: ["MY", ],
    462: ["MV", ],
    466: ["ML", ],
    470: ["MT", ],
    474: ["MQ", ],
    478: ["MR", ],
    480: ["MU", ],
    484: ["MX", ],
    492: ["MC", ],
    496: ["MN", ],
    498: ["MD", ],
    499: ["ME", ],
    500: ["MS", ],
    504: ["MA", ],
    508: ["MZ", ],
    512: ["OM", ],
    516: ["NA", ],
    520: ["NR", ],
    524: ["NP", ],
    528: ["NL", ],
    531: ["CW", ],
    533: ["AW", ],
    534: ["SX", ],
    535: ["BQ", ],
    540: ["NC", ],
    548: ["VU", ],
    554: ["NZ", ],
    558: ["NI", ],
    562: ["NE", ],
    566: ["NG", ],
    570: ["NU", ],
    574: ["NF", ],
    578: ["NO", ],
    580: ["MP", ],
    583: ["FM", ],
    584: ["MH", ],
    585: ["PW", ],
    586: ["PK", ],
    591: ["PA", ],
    598: ["PG", ],
    600: ["PY", ],
    604: ["PE", ],
    608: ["PH", ],
    612: ["PN", ],
    616: ["PL", ],
    620: ["PT", ],
    624: ["GW", ],
    626: ["TL", ],
    630: ["PR", ],
    634: ["QA", ],
    638: ["RE", ],
    642: ["RO", ],
    643: ["RU", ],
    646: ["RW", ],
    652: ["BL", ],
    654: ["SH", ],
    659: ["KN", ],
    660: ["AI", ],
    662: ["LC", ],
    663: ["MF", ],
    666: ["PM", ],
    670: ["VC", ],
    674: ["SM", ],
    678: ["ST", ],
    682: ["SA", ],
    686: ["SN", ],
    688: ["RS", ],
    690: ["SC", ],
    694: ["SL", ],
    702: ["SG", ],
    703: ["SK", ],
    704: ["VN", ],
    705: ["SI", ],
    706: ["SO", ],
    710: ["ZA", ],
    716: ["ZW", ],
    724: ["ES", ],
    728: ["SS", ],
    729: ["SD", ],
    732: ["EH", ],
    740: ["SR", ],
    744: ["SJ", ],
    748: ["SZ", ],
    752: ["SE", ],
    756: ["CH", ],
    760: ["SY", ],
    762: ["TJ", ],
    764: ["TH", ],
    768: ["TG", ],
    772: ["TK", ],
    776: ["TO", ],
    780: ["TT", ],
    784: ["AE", ],
    788: ["TN", ],
    792: ["TR", ],
    795: ["TM", ],
    796: ["TC", ],
    798: ["TV", ],
    800: ["UG", ],
    804: ["UA", ],
    807: ["MK", ],
    818: ["EG", ],
    826: ["GB", ],
    831: ["GG", ],
    832: ["JE", ],
    833: ["IM", ],
    834: ["TZ", ],
    840: ["US", ],
    850: ["VI", ],
    854: ["BF", ],
    858: ["UY", ],
    860: ["UZ", ],
    862: ["VE", ],
    876: ["WF", ],
    882: ["WS", ],
    887: ["YE", ],
    894: ["ZM", ],
}

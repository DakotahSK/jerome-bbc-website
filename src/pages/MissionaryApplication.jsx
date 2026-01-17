import { useState } from 'react';
import { Send } from 'lucide-react';
import SectionTitle from '../components/shared/SectionTitle';
import Card from '../components/shared/Card';

const MissionaryApplication = () => {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      });
      setSubmitted(true);
      window.scrollTo(0, 0);
    } catch (error) {
      alert('There was an error submitting the form. Please try again.');
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Application Submitted</h1>
              <p className="text-xl text-white/90">
                Thank you for your missionary application.
              </p>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Thank You!</h2>
              <p className="text-gray-600 text-lg mb-8">
                Your application has been received. Pastor Tim Knutson will review your submission and contact you if we would like to invite you to present your ministry.
              </p>
              <a href="/ministries/missions" className="inline-block bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Return to Missions Page
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors";
  const labelClass = "block text-sm font-semibold text-charcoal mb-2";
  const radioGroupClass = "flex flex-wrap gap-4";
  const radioLabelClass = "flex items-center gap-2 cursor-pointer";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Missionary Application</h1>
            <p className="text-xl text-white/90">
              Complete the application below to be considered for missionary support from Jerome Bible Baptist Church.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form
              name="missionary-application"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="missionary-application" />
              <p className="hidden">
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>

              {/* Section 1: General Questions */}
              <Card className="p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-primary border-b pb-4">Section 1: General Questions</h2>

                <div className="space-y-6">
                  <div>
                    <label className={labelClass}>1. Names and birthdays of family members</label>
                    <textarea name="familyMembers" rows="4" className={inputClass} onChange={handleChange} required></textarea>
                  </div>

                  <div>
                    <label className={labelClass}>2. Wedding Anniversary (mm/dd/yyyy)</label>
                    <input type="date" name="weddingAnniversary" className={inputClass} onChange={handleChange} />
                  </div>

                  <div>
                    <label className={labelClass}>3. Has either of you been previously married?</label>
                    <div className={radioGroupClass}>
                      <label className={radioLabelClass}>
                        <input type="radio" name="previousMarriage" value="Yes" onChange={handleChange} required /> Yes
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="previousMarriage" value="No" onChange={handleChange} /> No
                      </label>
                    </div>
                    {formData.previousMarriage === 'Yes' && (
                      <textarea name="previousMarriageExplanation" placeholder="Please explain..." rows="3" className={`${inputClass} mt-3`} onChange={handleChange}></textarea>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>4. Does your wife share the doctrinal beliefs stated below?</label>
                    <div className={radioGroupClass}>
                      <label className={radioLabelClass}>
                        <input type="radio" name="wifeSharesBeliefs" value="Yes" onChange={handleChange} required /> Yes
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="wifeSharesBeliefs" value="No" onChange={handleChange} /> No
                      </label>
                    </div>
                    {formData.wifeSharesBeliefs === 'No' && (
                      <textarea name="wifeBeliefsDifference" placeholder="Please explain any differences..." rows="3" className={`${inputClass} mt-3`} onChange={handleChange}></textarea>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>5. Does your wife fully support your service as a missionary?</label>
                    <div className={radioGroupClass}>
                      <label className={radioLabelClass}>
                        <input type="radio" name="wifeSupports" value="Yes" onChange={handleChange} required /> Yes
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="wifeSupports" value="No" onChange={handleChange} /> No
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>6. Home Church Name</label>
                    <input type="text" name="homeChurchName" className={inputClass} onChange={handleChange} required />
                  </div>

                  <div>
                    <label className={labelClass}>7. Church Address</label>
                    <input type="text" name="churchStreet" placeholder="Street Address" className={`${inputClass} mb-2`} onChange={handleChange} required />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <input type="text" name="churchCity" placeholder="City" className={inputClass} onChange={handleChange} required />
                      <input type="text" name="churchState" placeholder="State" className={inputClass} onChange={handleChange} required />
                      <input type="text" name="churchZip" placeholder="ZIP" className={inputClass} onChange={handleChange} required />
                      <input type="text" name="churchCountry" placeholder="Country" className={inputClass} onChange={handleChange} required />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>8. Pastor's Name</label>
                    <input type="text" name="pastorName" className={inputClass} onChange={handleChange} required />
                  </div>

                  <div>
                    <label className={labelClass}>9. Does this church support you financially?</label>
                    <div className={radioGroupClass}>
                      <label className={radioLabelClass}>
                        <input type="radio" name="churchSupportsFinancially" value="Yes" onChange={handleChange} required /> Yes
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="churchSupportsFinancially" value="No" onChange={handleChange} /> No
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="churchSupportsFinancially" value="Other" onChange={handleChange} /> Other
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>10. Is this your sending church?</label>
                    <div className={radioGroupClass}>
                      <label className={radioLabelClass}>
                        <input type="radio" name="sendingChurch" value="Yes" onChange={handleChange} required /> Yes
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="sendingChurch" value="No" onChange={handleChange} /> No
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>11. Your Email Address</label>
                    <input type="email" name="email" className={inputClass} onChange={handleChange} required />
                  </div>

                  <div>
                    <label className={labelClass}>12. Website Address (optional)</label>
                    <input type="url" name="website" placeholder="https://" className={inputClass} onChange={handleChange} />
                  </div>

                  <div>
                    <label className={labelClass}>13. Are you connected with a missions board?</label>
                    <div className={radioGroupClass}>
                      <label className={radioLabelClass}>
                        <input type="radio" name="missionsBoard" value="Yes" onChange={handleChange} required /> Yes
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="missionsBoard" value="No" onChange={handleChange} /> No
                      </label>
                    </div>
                    {formData.missionsBoard === 'Yes' && (
                      <input type="text" name="missionsBoardInfo" placeholder="Board name and address" className={`${inputClass} mt-3`} onChange={handleChange} />
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>14. Bible Institutes, Colleges, or Seminaries attended (include years)</label>
                    <textarea name="bibleEducation" rows="4" className={inputClass} onChange={handleChange}></textarea>
                  </div>

                  <div>
                    <label className={labelClass}>15. Have you ever served as a pastor?</label>
                    <div className={radioGroupClass}>
                      <label className={radioLabelClass}>
                        <input type="radio" name="servedAsPastor" value="Yes" onChange={handleChange} required /> Yes
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="servedAsPastor" value="No" onChange={handleChange} /> No
                      </label>
                    </div>
                    {formData.servedAsPastor === 'Yes' && (
                      <textarea name="churchesPastored" placeholder="Names, locations, and dates of churches pastored" rows="3" className={`${inputClass} mt-3`} onChange={handleChange}></textarea>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>16. Please give a brief testimony of your salvation</label>
                    <textarea name="salvationTestimony" rows="5" className={inputClass} onChange={handleChange} required></textarea>
                  </div>

                  <div>
                    <label className={labelClass}>17. Please give a brief testimony of your call to preach/minister</label>
                    <textarea name="callToMinistry" rows="5" className={inputClass} onChange={handleChange} required></textarea>
                  </div>

                  <div>
                    <label className={labelClass}>18. What mission field are you called to?</label>
                    <input type="text" name="missionField" className={inputClass} onChange={handleChange} required />
                  </div>

                  <div>
                    <label className={labelClass}>19. Why are you called to this particular field?</label>
                    <textarea name="whyThisField" rows="4" className={inputClass} onChange={handleChange} required></textarea>
                  </div>

                  <div>
                    <label className={labelClass}>20. Have you visited your field?</label>
                    <div className={radioGroupClass}>
                      <label className={radioLabelClass}>
                        <input type="radio" name="visitedField" value="Yes" onChange={handleChange} required /> Yes
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="visitedField" value="No" onChange={handleChange} /> No
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>21. Have you organized any churches?</label>
                    <div className={radioGroupClass}>
                      <label className={radioLabelClass}>
                        <input type="radio" name="organizedChurches" value="Yes" onChange={handleChange} required /> Yes
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="organizedChurches" value="No" onChange={handleChange} /> No
                      </label>
                    </div>
                    {formData.organizedChurches === 'Yes' && (
                      <textarea name="churchesOrganized" placeholder="Names and locations" rows="3" className={`${inputClass} mt-3`} onChange={handleChange}></textarea>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>22. Field Address (if applicable)</label>
                    <input type="text" name="fieldStreet" placeholder="Street Address" className={`${inputClass} mb-2`} onChange={handleChange} />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <input type="text" name="fieldCity" placeholder="City" className={inputClass} onChange={handleChange} />
                      <input type="text" name="fieldState" placeholder="State/Province" className={inputClass} onChange={handleChange} />
                      <input type="text" name="fieldZip" placeholder="ZIP/Postal" className={inputClass} onChange={handleChange} />
                      <input type="text" name="fieldCountry" placeholder="Country" className={inputClass} onChange={handleChange} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>23. Do you have an address on the field?</label>
                    <div className={radioGroupClass}>
                      <label className={radioLabelClass}>
                        <input type="radio" name="hasFieldAddress" value="Yes" onChange={handleChange} required /> Yes
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="hasFieldAddress" value="No" onChange={handleChange} /> No
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>24. How many churches/mission works are you currently involved with?</label>
                    <input type="number" name="currentMinistryCount" min="0" className={inputClass} onChange={handleChange} />
                  </div>

                  <div>
                    <label className={labelClass}>25. Do you have any unsecured debt?</label>
                    <div className={radioGroupClass}>
                      <label className={radioLabelClass}>
                        <input type="radio" name="unsecuredDebt" value="Yes" onChange={handleChange} required /> Yes
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="unsecuredDebt" value="No" onChange={handleChange} /> No
                      </label>
                    </div>
                    {formData.unsecuredDebt === 'Yes' && (
                      <textarea name="debtDetails" placeholder="Types and amounts" rows="3" className={`${inputClass} mt-3`} onChange={handleChange}></textarea>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>26. What financial arrangements have you made to prepare for the field?</label>
                    <textarea name="financialPreparation" rows="4" className={inputClass} onChange={handleChange}></textarea>
                  </div>

                  <div>
                    <label className={labelClass}>27. What arrangements have you made for retirement?</label>
                    <textarea name="retirementPreparation" rows="4" className={inputClass} onChange={handleChange}></textarea>
                  </div>
                </div>
              </Card>

              {/* Section 2: Doctrinal Information */}
              <Card className="p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-primary border-b pb-4">Section 2: Doctrinal Information</h2>

                <div className="space-y-6">
                  <div>
                    <label className={labelClass}>28. Which view of the creation account in Genesis do you hold?</label>
                    <div className="space-y-2">
                      <label className={radioLabelClass}>
                        <input type="radio" name="creationView" value="Six 24-hour days" onChange={handleChange} required /> Six literal 24-hour days
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="creationView" value="Gap Theory" onChange={handleChange} /> Gap Theory
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="creationView" value="Day Age Theory" onChange={handleChange} /> Day Age Theory
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="creationView" value="Theistic Evolution" onChange={handleChange} /> Theistic Evolution
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>29. How do you define "the church"?</label>
                    <div className="space-y-2">
                      <label className={radioLabelClass}>
                        <input type="radio" name="churchDefinition" value="Both local/universal and visible/invisible" onChange={handleChange} required /> Both local/universal and visible/invisible
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="churchDefinition" value="Only local and visible" onChange={handleChange} /> Only local and visible
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>30. When the Bible refers to the "body of Christ," it is speaking of:</label>
                    <div className="space-y-2">
                      <label className={radioLabelClass}>
                        <input type="radio" name="bodyOfChrist" value="Local assembly of baptized believers" onChange={handleChange} required /> A local assembly of baptized believers
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="bodyOfChrist" value="Both local and all saved" onChange={handleChange} /> Both the local church and all saved people
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="bodyOfChrist" value="Other" onChange={handleChange} /> Other
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>31. When was the first church established?</label>
                    <div className="space-y-2">
                      <label className={radioLabelClass}>
                        <input type="radio" name="firstChurch" value="During Christ's ministry" onChange={handleChange} required /> During Christ's earthly ministry
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="firstChurch" value="After resurrection, before Pentecost" onChange={handleChange} /> After resurrection, before Pentecost
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="firstChurch" value="On Day of Pentecost" onChange={handleChange} /> On the Day of Pentecost
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>32. When a person is saved, they automatically become a member of:</label>
                    <div className="space-y-2">
                      <label className={radioLabelClass}>
                        <input type="radio" name="savedMembership" value="Universal Church" onChange={handleChange} required /> The Universal Church
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="savedMembership" value="Family of God" onChange={handleChange} /> The Family of God
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="savedMembership" value="Body of Christ" onChange={handleChange} /> The Body of Christ
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="savedMembership" value="Other" onChange={handleChange} /> Other
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>33. Whose baptism does the church you are establishing accept?</label>
                    <div className="space-y-2">
                      <label className={radioLabelClass}>
                        <input type="radio" name="baptismAccepted" value="Only Baptist churches of like faith and practice" onChange={handleChange} required /> Only Baptist churches of like faith and practice
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="baptismAccepted" value="Baptist or Baptistic churches" onChange={handleChange} /> Baptist or Baptistic churches
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="baptismAccepted" value="Any immersion after salvation" onChange={handleChange} /> Any immersion after salvation
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>34. Who has the authority to baptize?</label>
                    <div className="space-y-2">
                      <label className={radioLabelClass}>
                        <input type="radio" name="baptismAuthority" value="Believers" onChange={handleChange} required /> Believers
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="baptismAuthority" value="The church" onChange={handleChange} /> The church
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="baptismAuthority" value="The pastor" onChange={handleChange} /> The pastor
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>35. In 1 Corinthians 12:13, "baptized into one body" refers to:</label>
                    <div className="space-y-2">
                      <label className={radioLabelClass}>
                        <input type="radio" name="corinthiansBaptism" value="Spirit Baptism" onChange={handleChange} required /> Spirit Baptism
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="corinthiansBaptism" value="Water Baptism" onChange={handleChange} /> Water Baptism
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="corinthiansBaptism" value="Salvation" onChange={handleChange} /> Salvation
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>36. Spirit baptism:</label>
                    <div className="space-y-2">
                      <label className={radioLabelClass}>
                        <input type="radio" name="spiritBaptism" value="Referenced 6 times, occurred once at Pentecost" onChange={handleChange} required /> Is referenced 6 times and occurred once at Pentecost
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="spiritBaptism" value="Occurs at salvation now" onChange={handleChange} /> Occurs at salvation for all believers now
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="spiritBaptism" value="Other" onChange={handleChange} /> Other
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>37. The Lord's Supper is:</label>
                    <div className="space-y-2">
                      <label className={radioLabelClass}>
                        <input type="radio" name="lordsSupper" value="Memorial of Christ's death" onChange={handleChange} required /> A memorial of Christ's death
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="lordsSupper" value="Sacrament for God's favor" onChange={handleChange} /> A sacrament for God's favor
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="lordsSupper" value="Mystical union with Christ" onChange={handleChange} /> A mystical union with Christ
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>38. What elements do you use for communion?</label>
                    <div className="space-y-2">
                      <label className={radioLabelClass}>
                        <input type="radio" name="communionElements" value="Unleavened bread and alcoholic wine" onChange={handleChange} required /> Unleavened bread and alcoholic wine
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="communionElements" value="Unleavened bread and grape juice" onChange={handleChange} /> Unleavened bread and grape juice
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="communionElements" value="Other" onChange={handleChange} /> Other
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>39. Would you allow a visiting pastor to serve communion in your church?</label>
                    <div className={radioGroupClass}>
                      <label className={radioLabelClass}>
                        <input type="radio" name="visitingPastorCommunion" value="Yes" onChange={handleChange} required /> Yes
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="visitingPastorCommunion" value="No" onChange={handleChange} /> No
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>40. The King James Version translation is:</label>
                    <div className="space-y-2">
                      <label className={radioLabelClass}>
                        <input type="radio" name="kjvView" value="Inferior to others" onChange={handleChange} required /> Inferior to other translations
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="kjvView" value="One of several accurate" onChange={handleChange} /> One of several accurate translations
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="kjvView" value="Perfect preserved Word for English speakers" onChange={handleChange} /> The perfect preserved Word of God for English-speaking people
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>41. Do you use other English translations?</label>
                    <div className={radioGroupClass}>
                      <label className={radioLabelClass}>
                        <input type="radio" name="useOtherTranslations" value="Yes" onChange={handleChange} required /> Yes
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="useOtherTranslations" value="No" onChange={handleChange} /> No
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>42. If on a non-English field, is your translation from the Masoretic Text and Textus Receptus?</label>
                    <div className={radioGroupClass}>
                      <label className={radioLabelClass}>
                        <input type="radio" name="textusReceptus" value="Yes" onChange={handleChange} required /> Yes
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="textusReceptus" value="No" onChange={handleChange} /> No
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="textusReceptus" value="N/A" onChange={handleChange} /> N/A
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>43. Is repentance necessary for salvation?</label>
                    <div className={radioGroupClass}>
                      <label className={radioLabelClass}>
                        <input type="radio" name="repentanceNecessary" value="Yes" onChange={handleChange} required /> Yes
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="repentanceNecessary" value="No" onChange={handleChange} /> No
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>44. Do you agree that repentance is a change of mind that results in a change of action?</label>
                    <div className={radioGroupClass}>
                      <label className={radioLabelClass}>
                        <input type="radio" name="repentanceDefinition" value="Yes" onChange={handleChange} required /> Yes
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="repentanceDefinition" value="No" onChange={handleChange} /> No
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>45. Your ministry focus is:</label>
                    <div className="space-y-2">
                      <label className={radioLabelClass}>
                        <input type="radio" name="ministryFocus" value="Church Planting" onChange={handleChange} required /> Church Planting
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="ministryFocus" value="Helps Ministry" onChange={handleChange} /> Helps Ministry
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="ministryFocus" value="Other" onChange={handleChange} /> Other
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>46. Prior to deputation, were you actively involved in outreach?</label>
                    <div className={radioGroupClass}>
                      <label className={radioLabelClass}>
                        <input type="radio" name="preDeputationOutreach" value="Yes" onChange={handleChange} required /> Yes
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="preDeputationOutreach" value="No" onChange={handleChange} /> No
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>47. Your position on Christ's return is:</label>
                    <div className="space-y-2">
                      <label className={radioLabelClass}>
                        <input type="radio" name="christReturn" value="Premillennial/Pretribulational" onChange={handleChange} required /> Premillennial/Pretribulational
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="christReturn" value="Postmillennial" onChange={handleChange} /> Postmillennial
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="christReturn" value="Amillennial" onChange={handleChange} /> Amillennial
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="christReturn" value="Preterist" onChange={handleChange} /> Preterist
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="christReturn" value="Mid-Tribulational" onChange={handleChange} /> Mid-Tribulational
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="christReturn" value="Pre-Wrath" onChange={handleChange} /> Pre-Wrath
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="christReturn" value="Other" onChange={handleChange} /> Other
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>48. Your church music style is:</label>
                    <div className="space-y-2">
                      <label className={radioLabelClass}>
                        <input type="radio" name="musicStyle" value="Traditional" onChange={handleChange} required /> Traditional
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="musicStyle" value="Blended" onChange={handleChange} /> Blended
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="musicStyle" value="Contemporary" onChange={handleChange} /> Contemporary
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>49. Do you agree with the doctrine of eternal security?</label>
                    <div className={radioGroupClass}>
                      <label className={radioLabelClass}>
                        <input type="radio" name="eternalSecurity" value="Agree" onChange={handleChange} required /> Agree
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="eternalSecurity" value="Disagree" onChange={handleChange} /> Disagree
                      </label>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Section 3: Accountability Information */}
              <Card className="p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-primary border-b pb-4">Section 3: Accountability Information</h2>

                <div className="space-y-6">
                  <div>
                    <label className={labelClass}>50. What do you teach about giving and mission support?</label>
                    <div className="space-y-2">
                      <label className={radioLabelClass}>
                        <input type="radio" name="givingTeaching" value="Churches have Biblical duty to give to missions" onChange={handleChange} required /> Churches have a Biblical duty to give to missions
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="givingTeaching" value="Churches support only their own ministries" onChange={handleChange} /> Churches should support only their own ministries
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="givingTeaching" value="Other" onChange={handleChange} /> Other
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>51. Do you personally tithe?</label>
                    <div className={radioGroupClass}>
                      <label className={radioLabelClass}>
                        <input type="radio" name="personallyTithe" value="Yes" onChange={handleChange} required /> Yes
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="personallyTithe" value="No" onChange={handleChange} /> No
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>52. Does your home church have disciplinary power over you?</label>
                    <div className={radioGroupClass}>
                      <label className={radioLabelClass}>
                        <input type="radio" name="churchDisciplinaryPower" value="Yes" onChange={handleChange} required /> Yes
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="churchDisciplinaryPower" value="No" onChange={handleChange} /> No
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>53. Will you hold yourself accountable for moral and doctrinal standards?</label>
                    <div className={radioGroupClass}>
                      <label className={radioLabelClass}>
                        <input type="radio" name="accountableStandards" value="Yes" onChange={handleChange} required /> Yes
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="accountableStandards" value="No" onChange={handleChange} /> No
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>54. Does your home church have the authority to recall you from the field?</label>
                    <div className={radioGroupClass}>
                      <label className={radioLabelClass}>
                        <input type="radio" name="recallAuthority" value="Yes" onChange={handleChange} required /> Yes
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="recallAuthority" value="No" onChange={handleChange} /> No
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>55. Will you promptly notify supporters of any issues affecting your ministry?</label>
                    <div className={radioGroupClass}>
                      <label className={radioLabelClass}>
                        <input type="radio" name="notifyIssues" value="Yes" onChange={handleChange} required /> Yes
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="notifyIssues" value="No" onChange={handleChange} /> No
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>56. Do you expect support to continue indefinitely without re-evaluation?</label>
                    <div className={radioGroupClass}>
                      <label className={radioLabelClass}>
                        <input type="radio" name="supportContinuation" value="Yes" onChange={handleChange} required /> Yes
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="supportContinuation" value="No" onChange={handleChange} /> No
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>57. Will you notify supporters if you change your field?</label>
                    <div className={radioGroupClass}>
                      <label className={radioLabelClass}>
                        <input type="radio" name="fieldChangeNotify" value="Yes" onChange={handleChange} required /> Yes
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="fieldChangeNotify" value="No" onChange={handleChange} /> No
                      </label>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Section 4: Miscellaneous Information */}
              <Card className="p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-primary border-b pb-4">Section 4: Miscellaneous Information</h2>

                <div className="space-y-6">
                  <div>
                    <label className={labelClass}>58. Did you resent any of these questions?</label>
                    <div className={radioGroupClass}>
                      <label className={radioLabelClass}>
                        <input type="radio" name="resentedQuestions" value="Yes" onChange={handleChange} required /> Yes
                      </label>
                      <label className={radioLabelClass}>
                        <input type="radio" name="resentedQuestions" value="No" onChange={handleChange} /> No
                      </label>
                    </div>
                    {formData.resentedQuestions === 'Yes' && (
                      <textarea name="resentedWhich" placeholder="Which questions and why?" rows="3" className={`${inputClass} mt-3`} onChange={handleChange}></textarea>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>59. Additional comments or information</label>
                    <textarea name="additionalComments" rows="5" className={inputClass} onChange={handleChange}></textarea>
                  </div>

                  <div>
                    <label className={labelClass}>60. Contact Phone Number</label>
                    <input type="tel" name="phone" className={inputClass} onChange={handleChange} required />
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" name="digitalSignature" className="mt-1" onChange={handleChange} required />
                      <span className="text-sm text-gray-700">
                        <strong>61. Digital Signature:</strong> I certify that I have completed this application honestly and to the best of my ability. I understand that providing false information may disqualify my application for support.
                      </span>
                    </label>
                  </div>
                </div>
              </Card>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-bold py-4 px-12 rounded-lg transition-colors text-lg"
                >
                  <Send size={20} />
                  Submit Application
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  Note: If at any time you change your doctrines, field, or home church, we will re-evaluate our support.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionaryApplication;

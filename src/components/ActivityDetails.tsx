import "../styles/activity-details.css";
function ActivityDetails() {
  const activityData = {
    totalActivities: 18,
    completed: 12,
    remaining: 4,
    notEvaluated: 2,
    passed: 61,
    failed: 14,
    disposal: 8,
  };

  const completedPercentage =
    (activityData.completed / activityData.totalActivities) * 100;
  const remainingPercentage =
    (activityData.remaining / activityData.totalActivities) * 100;
  const notEvaluatedPercentage =
    (activityData.notEvaluated / activityData.totalActivities) * 100;

  return (
    <div className="activity-details">
      <div className="header flex-row justify-between">
        <div className="total-activities">
          <h1>{activityData.totalActivities}</h1>
          <p>Total Activities</p>
        </div>

        <div className="legend flex-col gap-1">
          <span className="legend-item completed">Completed</span>
          <span className="legend-item remaining">Remaining</span>
          <span className="legend-item not-evaluated">Not Evaluated</span>
        </div>
      </div>

      <div className="progress-bar">
        <div
          className="bar completed mr-2"
          style={{ width: `${completedPercentage}%` }}
        ></div>
        <div
          className="bar remaining mr-2"
          style={{ width: `${remainingPercentage}%` }}
        ></div>
        <div
          className="bar not-evaluated"
          style={{ width: `${notEvaluatedPercentage}%` }}
        ></div>
      </div>
      <div className="flex-row gap-2">
        <div className="flex-row stat-item gap-2 bg-slate">
          <div className="completed-box">
            <div className="flex-row gap-2 mb-3">
              <h2 className="fw-600">{activityData.completed}</h2>
              <p>({Math.round(completedPercentage)}%)</p>
            </div>
            <h3>Completed</h3>
          </div>
          <div className="flex-col">
            <p className="sub-stat passed flex-row gap-3">
              Passed <span>({activityData.passed})</span>
            </p>
            <p className="sub-stat failed flex-row gap-3">
              Failed <span>({activityData.failed})</span>
            </p>
            <p className="sub-stat disposal flex-row gap-3">
              Disposal <span>({activityData.disposal})</span>
            </p>
          </div>
        </div>

        <div className="stat-item bg-slate">
          <div className="flex-row gap-2 py-1 mb-1">
            <h2 className="fw-600">{activityData.remaining}</h2>
            <p>({Math.round(remainingPercentage)}%)</p>
          </div>
          <h3 className="mb-1">Remaining</h3>
        </div>

        <div className="stat-item bg-slate">
          <div className="flex-row gap-2 py-1 mb-1">
            <h2 className="fw-600">{activityData.notEvaluated}</h2>
            <p>({Math.round(notEvaluatedPercentage)}%)</p>
          </div>
          <h3 className="mb-1">Not Evaluated</h3>
        </div>
      </div>
    </div>
  );
}

export default ActivityDetails;
